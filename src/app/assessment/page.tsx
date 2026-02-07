"use client";

import { useState } from "react";
import Link from "next/link";
import {
  gad7Questions,
  phq9Questions,
  answerOptions,
  getGAD7Severity,
  getPHQ9Severity,
  type Question,
} from "@/lib/assessment";

type AssessmentType = "gad7" | "phq9" | null;

export default function AssessmentPage() {
  const [assessmentType, setAssessmentType] = useState<AssessmentType>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] =
    assessmentType === "gad7" ? gad7Questions : phq9Questions;

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((c) => c + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const severity =
    assessmentType === "gad7"
      ? getGAD7Severity(totalScore)
      : getPHQ9Severity(totalScore);

  const reset = () => {
    setAssessmentType(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-sage text-sm hover:text-sage-dark transition-colors mb-4 inline-block"
          >
            &larr; Back to home
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-3">
            Mental Wellness Self-Assessment
          </h1>
          <p className="text-warm-gray leading-relaxed max-w-lg mx-auto">
            These brief, clinically validated screenings can help you understand
            your current emotional well-being. They are not a diagnosis — but they
            can be a meaningful first step.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-cream-dark">
          {/* Assessment Selection */}
          {!assessmentType && (
            <div>
              <h2 className="font-heading text-2xl text-charcoal mb-2">
                Choose an Assessment
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                Each assessment takes approximately 2–3 minutes.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setAssessmentType("gad7")}
                  className="w-full p-6 rounded-xl border-2 border-cream-dark hover:border-sage text-left transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="font-heading text-lg text-charcoal mb-1 group-hover:text-sage-dark transition-colors">
                    GAD-7 — Anxiety Screening
                  </h3>
                  <p className="text-warm-gray text-sm">
                    7 questions to help understand your anxiety levels over the
                    past two weeks.
                  </p>
                </button>

                <button
                  onClick={() => setAssessmentType("phq9")}
                  className="w-full p-6 rounded-xl border-2 border-cream-dark hover:border-sage text-left transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="font-heading text-lg text-charcoal mb-1 group-hover:text-sage-dark transition-colors">
                    PHQ-9 — Depression Screening
                  </h3>
                  <p className="text-warm-gray text-sm">
                    9 questions to help understand your mood patterns over the
                    past two weeks.
                  </p>
                </button>
              </div>

              <div className="mt-8 p-4 bg-cream rounded-xl">
                <p className="text-xs text-warm-gray flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-sage shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  These screenings are for informational purposes only and do not
                  constitute a clinical diagnosis. Your responses are not stored
                  or shared.
                </p>
              </div>
            </div>
          )}

          {/* Questions */}
          {assessmentType && !showResult && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-xl text-charcoal">
                  {assessmentType === "gad7"
                    ? "Anxiety Screening"
                    : "Depression Screening"}
                </h2>
                <span className="text-warm-gray text-sm">
                  {currentQuestion + 1} of {questions.length}
                </span>
              </div>

              {/* Progress */}
              <div className="w-full h-1.5 bg-cream-dark rounded-full mb-8">
                <div
                  className="h-full bg-sage rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <p className="text-warm-gray text-sm mb-2">
                Over the last 2 weeks, how often have you been bothered by:
              </p>

              <p className="text-charcoal text-lg font-medium mb-8">
                {questions[currentQuestion].text}
              </p>

              <div className="space-y-3">
                {answerOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                      answers[currentQuestion] === option.value
                        ? "border-sage bg-sage/5"
                        : "border-cream-dark hover:border-sand"
                    }`}
                  >
                    <span className="text-charcoal">{option.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() =>
                    currentQuestion > 0
                      ? setCurrentQuestion((c) => c - 1)
                      : reset()
                  }
                  className="text-warm-gray hover:text-charcoal transition-colors text-sm cursor-pointer"
                >
                  &larr; {currentQuestion > 0 ? "Previous" : "Back"}
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {showResult && (
            <div className="text-center">
              <h2 className="font-heading text-2xl text-charcoal mb-6">
                Your Results
              </h2>

              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-cream mx-auto flex items-center justify-center mb-4">
                  <span className={`text-3xl font-heading font-bold ${severity.color}`}>
                    {totalScore}
                  </span>
                </div>
                <p className="text-xs text-warm-gray">
                  out of {questions.length * 3}
                </p>
              </div>

              <div className="bg-cream rounded-2xl p-6 mb-8 text-left">
                <p className={`font-heading text-lg font-semibold mb-2 ${severity.color}`}>
                  {severity.level}
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {severity.description}
                </p>
              </div>

              <div className="bg-sage/5 rounded-2xl p-6 mb-8 border border-sage/20">
                <p className="text-charcoal text-sm leading-relaxed">
                  Remember: this is a screening tool, not a diagnosis. A
                  professional evaluation can provide a complete understanding of
                  your mental health and the most appropriate path forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-sage-dark transition-all duration-300"
                >
                  Book a Consultation
                </Link>
                <button
                  onClick={reset}
                  className="border border-sand text-charcoal px-8 py-3 rounded-full font-medium hover:bg-sand/10 transition-all duration-300 cursor-pointer"
                >
                  Take Another Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
