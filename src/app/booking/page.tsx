"use client";

import { useState } from "react";
import Link from "next/link";

type ConsultationType = "in-clinic" | "video" | null;
type Duration = "standard" | "extended" | null;

const WHATSAPP_NUMBER = "919148828642";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const concerns = [
  "Anxiety & Stress",
  "Depression & Mood",
  "Relationship Concerns",
  "Women's Emotional Health",
  "Child & Adolescent Issues",
  "Addiction & Recovery",
  "Career & Academic Stress",
  "Personality & Personal Growth",
  "Other",
];

function buildWhatsAppUrl(params: {
  name: string;
  phone: string;
  email: string;
  consultationType: ConsultationType;
  duration: Duration;
  date: string;
  time: string;
  concern: string;
  message: string;
}) {
  const dateFormatted = params.date
    ? new Date(params.date).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const typeLabel =
    params.consultationType === "video"
      ? "Secure Video Consultation"
      : "Private In-Clinic";
  const durationLabel =
    params.duration === "extended"
      ? "Extended Deep-Dive (75 min)"
      : "Standard Session (45 min)";

  const lines = [
    `Hello Dr. Suha,`,
    ``,
    `I would like to book a consultation.`,
    ``,
    `*Name:* ${params.name}`,
    `*Phone:* ${params.phone}`,
    params.email ? `*Email:* ${params.email}` : "",
    `*Consultation Type:* ${typeLabel}`,
    `*Duration:* ${durationLabel}`,
    `*Preferred Date:* ${dateFormatted}`,
    `*Preferred Time:* ${params.time}`,
    params.concern ? `*Concern Area:* ${params.concern}` : "",
    params.message ? `*Additional Details:* ${params.message}` : "",
    ``,
    `Thank you.`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

function buildQuickWhatsAppUrl() {
  const text = `Hello Dr. Suha, I would like to book a consultation. Could you please share the available slots?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] =
    useState<ConsultationType>(null);
  const [duration, setDuration] = useState<Duration>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
  });

  const totalSteps = 5;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const whatsappUrl = buildWhatsAppUrl({
    name: form.name,
    phone: form.phone,
    email: form.email,
    consultationType,
    duration,
    date: selectedDate,
    time: selectedTime,
    concern: form.concern,
    message: form.message,
  });

  const handleSubmit = () => {
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
    nextStep();
  };

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-sage text-sm hover:text-sage-dark transition-colors mb-4 inline-block"
          >
            &larr; Back to home
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-3">
            Book a Private Consultation
          </h1>
          <p className="text-warm-gray leading-relaxed">
            Schedule your consultation with Dr. Suha Riyaz in just a few steps.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-warm-gray">
            <svg
              className="w-4 h-4 text-sage"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            All consultations are strictly confidential
          </div>
        </div>

        {/* Quick WhatsApp Booking */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-charcoal font-medium text-sm">
                Prefer to book directly?
              </p>
              <p className="text-warm-gray text-xs mt-0.5">
                Message Dr. Suha on WhatsApp for quick scheduling
              </p>
            </div>
            <a
              href={buildQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1fb855] transition-all duration-300 shadow-sm hover:shadow-md shrink-0"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-cream-dark" />
          <span className="text-warm-gray text-xs uppercase tracking-wider">
            or fill in your preferences below
          </span>
          <div className="flex-1 h-px bg-cream-dark" />
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    i + 1 <= step
                      ? "bg-sage text-white"
                      : "bg-cream-dark text-warm-gray"
                  }`}
                >
                  {i + 1 < step ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-0.5 mx-1 transition-all duration-300 ${
                      i + 1 < step ? "bg-sage" : "bg-cream-dark"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-warm-gray">
            <span>Type</span>
            <span>Duration</span>
            <span>Schedule</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-cream-dark">
          {/* Step 1: Consultation Type */}
          {step === 1 && (
            <div>
              <h2 className="font-heading text-2xl text-charcoal mb-2">
                Choose Your Consultation Type
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                Select the format that works best for you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setConsultationType("in-clinic")}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                    consultationType === "in-clinic"
                      ? "border-sage bg-sage/5"
                      : "border-cream-dark hover:border-sand"
                  }`}
                >
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="font-heading text-lg text-charcoal mb-1">
                    Private In-Clinic
                  </h3>
                  <p className="text-warm-gray text-sm">
                    Face-to-face consultation in a private, comfortable setting.
                  </p>
                </button>

                <button
                  onClick={() => setConsultationType("video")}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                    consultationType === "video"
                      ? "border-sage bg-sage/5"
                      : "border-cream-dark hover:border-sand"
                  }`}
                >
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-heading text-lg text-charcoal mb-1">
                    Secure Video Consultation
                  </h3>
                  <p className="text-warm-gray text-sm">
                    Connect from anywhere through a secure, private video call.
                  </p>
                </button>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextStep}
                  disabled={!consultationType}
                  className="bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-sage-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Duration */}
          {step === 2 && (
            <div>
              <h2 className="font-heading text-2xl text-charcoal mb-2">
                Select Session Duration
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                Choose the duration that fits your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setDuration("standard")}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                    duration === "standard"
                      ? "border-sage bg-sage/5"
                      : "border-cream-dark hover:border-sand"
                  }`}
                >
                  <h3 className="font-heading text-lg text-charcoal mb-1">
                    Standard Session
                  </h3>
                  <p className="text-sage font-medium mb-2">45 minutes</p>
                  <p className="text-warm-gray text-sm">
                    Ideal for follow-up appointments, medication reviews, and
                    focused discussions.
                  </p>
                </button>

                <button
                  onClick={() => setDuration("extended")}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                    duration === "extended"
                      ? "border-sage bg-sage/5"
                      : "border-cream-dark hover:border-sand"
                  }`}
                >
                  <h3 className="font-heading text-lg text-charcoal mb-1">
                    Extended Deep-Dive
                  </h3>
                  <p className="text-sage font-medium mb-2">75 minutes</p>
                  <p className="text-warm-gray text-sm">
                    Recommended for first consultations, complex concerns, or
                    couples therapy sessions.
                  </p>
                </button>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!duration}
                  className="bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-sage-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Calendar */}
          {step === 3 && (
            <div>
              <h2 className="font-heading text-2xl text-charcoal mb-2">
                Choose a Date &amp; Time
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                Select your preferred appointment slot.
              </p>

              {/* Date Grid */}
              <div className="mb-8">
                <p className="text-sm font-medium text-charcoal mb-3">
                  Select a date
                </p>
                <div className="grid grid-cols-7 gap-2">
                  {dates.map((date) => {
                    const dateStr = date.toISOString().split("T")[0];
                    const day = date.getDate();
                    const weekday = date.toLocaleDateString("en", {
                      weekday: "short",
                    });
                    const isSunday = date.getDay() === 0;

                    return (
                      <button
                        key={dateStr}
                        onClick={() => !isSunday && setSelectedDate(dateStr)}
                        disabled={isSunday}
                        className={`p-2 rounded-xl text-center transition-all duration-200 cursor-pointer ${
                          selectedDate === dateStr
                            ? "bg-sage text-white"
                            : isSunday
                              ? "bg-cream-dark/50 text-warm-gray/30 cursor-not-allowed"
                              : "bg-cream hover:bg-sage/10 text-charcoal"
                        }`}
                      >
                        <span className="text-xs block">{weekday}</span>
                        <span className="text-sm font-medium block">{day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <p className="text-sm font-medium text-charcoal mb-3">
                    Select a time
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
                          selectedTime === time
                            ? "bg-sage text-white"
                            : "bg-cream hover:bg-sage/10 text-charcoal"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-sage-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Intake Form */}
          {step === 4 && (
            <div>
              <h2 className="font-heading text-2xl text-charcoal mb-2">
                Your Details
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                This information helps Dr. Suha prepare for your consultation.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none transition-colors bg-cream"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Email{" "}
                      <span className="text-warm-gray font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none transition-colors bg-cream"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none transition-colors bg-cream"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Primary Concern
                  </label>
                  <select
                    value={form.concern}
                    onChange={(e) =>
                      setForm({ ...form, concern: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none transition-colors bg-cream appearance-none"
                  >
                    <option value="">Select a concern area</option>
                    {concerns.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Brief Description{" "}
                    <span className="text-warm-gray font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none transition-colors bg-cream resize-none"
                    placeholder="Share anything that would help Dr. Suha prepare for your consultation..."
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-warm-gray flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Your information is encrypted and protected by medical
                confidentiality.
              </p>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone}
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1fb855] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Confirm via WhatsApp
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl text-charcoal mb-3">
                Booking Sent via WhatsApp
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6 max-w-md mx-auto">
                Thank you, {form.name}. Your{" "}
                {consultationType === "video" ? "video" : "in-clinic"}{" "}
                consultation request for{" "}
                {selectedDate &&
                  new Date(selectedDate).toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                at {selectedTime} has been sent to Dr. Suha via WhatsApp.
              </p>
              <p className="text-warm-gray text-sm mb-8">
                Dr. Suha will confirm your appointment on WhatsApp shortly.
              </p>

              {/* Didn't open? Retry link */}
              <div className="bg-cream rounded-xl p-5 mb-8 max-w-sm mx-auto">
                <p className="text-xs text-warm-gray mb-3">
                  WhatsApp didn&apos;t open? Send your booking manually:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1fb855] transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Open WhatsApp Again
                </a>
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="text-warm-gray/50 text-xs">
                  You can also call directly:{" "}
                  <a
                    href="tel:+919148828642"
                    className="text-sage hover:text-sage-dark transition-colors"
                  >
                    +91 91488 28642
                  </a>
                </p>
                <Link
                  href="/"
                  className="text-sage hover:text-sage-dark transition-colors font-medium text-sm"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
