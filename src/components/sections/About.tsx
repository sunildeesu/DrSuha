import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const whyPatients = [
  {
    title: "Compassionate Listening",
    description:
      "Every patient is heard with genuine empathy. Dr. Suha creates a safe space where you can express yourself without fear or judgment.",
    icon: "💛",
  },
  {
    title: "Evidence-Based Approach",
    description:
      "Treatment plans are grounded in the latest psychiatric research and internationally recognized therapeutic modalities.",
    icon: "📊",
  },
  {
    title: "Confidential & Non-Judgmental",
    description:
      "Your privacy is treated as sacred. Every interaction is governed by the highest standards of medical ethics and discretion.",
    icon: "🔒",
  },
  {
    title: "Holistic & Personalized",
    description:
      "No two patients are the same. Care plans are tailored to your unique circumstances, goals, and pace of healing.",
    icon: "🌿",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Doctor Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Portrait */}
          <AnimateOnScroll animation="slideInLeft">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-cream to-cream-dark rounded-3xl overflow-hidden border border-cream-dark">
                <Image
                  src="/images/dr-suha.webp"
                  alt="Dr. Suha Riyaz — Consultant Psychiatrist"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-6 py-4 border border-cream-dark">
                <p className="text-sage font-semibold text-sm">MRCPsych (UK)</p>
                <p className="text-warm-gray text-xs">
                  Royal College of Psychiatrists
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bio Content */}
          <AnimateOnScroll animation="slideInRight">
            <div>
              <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
                About the Doctor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                Dr. Suha Riyaz
              </h2>
              <p className="text-warm-gray text-sm uppercase tracking-wider mb-6">
                MBBS &bull; MD Psychiatry &bull; MRCPsych (Part A) &bull; Assistant
                Professor of Psychiatry
              </p>

              <div className="space-y-4 text-warm-gray leading-relaxed mb-8">
                <p>
                  Dr. Suha Riyaz is an experienced psychiatrist and medical
                  educator currently serving as Assistant Professor in the
                  Department of Psychiatry at Shridevi Institute of Medical
                  Sciences &amp; Research Hospital, Tumkur. Known for calm
                  listening, clear communication, and a sincere commitment to
                  helping individuals and families heal.
                </p>
                <p>
                  With advanced training from RRMC&amp;H Bangalore and recognition
                  from the Royal College of Psychiatrists (UK), Dr. Suha brings
                  international standards of psychiatric care to every
                  consultation.
                </p>
                <p>
                  She is certified in Couples Therapy and DBT-informed skills,
                  and is a Life Member of the Indian Psychiatric Society. Her
                  approach integrates evidence-based treatments with genuine
                  human connection.
                </p>
              </div>

              {/* Social / Professional Links */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/suha-riyaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-blue hover:text-charcoal transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  View LinkedIn Profile
                </a>
                <a
                  href="https://medium.com/@doctorknowledgegeek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-blue hover:text-charcoal transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  Project Heal Self
                </a>
              </div>

              {/* Personal Note */}
              <div className="bg-cream rounded-2xl p-6 border-l-4 border-sage">
                <p className="text-sm font-medium text-sage mb-2 uppercase tracking-wider">
                  A Note from Dr. Suha
                </p>
                <p className="text-charcoal italic leading-relaxed">
                  &ldquo;Healing begins when denial ends, diagnosis is accurate,
                  and help is sought early, even before functional impairment
                  sets in.&rdquo;
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Why Patients Choose */}
        <div>
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center mb-16">
              <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
                The Difference
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                Why Patients Choose This Practice
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPatients.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fadeInUp" delay={i * 150}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading text-lg text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
