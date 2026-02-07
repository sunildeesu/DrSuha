import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const trustSignals = [
  { label: "MD Psychiatry", icon: "🎓" },
  { label: "MRCPsych (UK)", icon: "🏛" },
  { label: "Evidence-Based Care", icon: "📋" },
  { label: "Multilingual", icon: "🌐" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-cream to-cream-dark overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sand/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          <AnimateOnScroll animation="fadeIn">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-6">
              Private Psychiatric Practice
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
              Compassionate, Confidential Psychiatric Care for Individuals &amp;
              Families Seeking{" "}
              <span className="text-sage">Lasting Change</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <p className="text-warm-gray text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Private consultations. Evidence-based care. Personalized treatment
              plans. Experience psychiatric care that prioritizes your comfort,
              privacy, and well-being.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/booking"
                className="bg-sage text-white px-8 py-4 rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Book a Private Consultation
              </Link>
              <a
                href="#services"
                className="border border-sand text-charcoal px-8 py-4 rounded-full text-base font-medium hover:bg-sand/10 transition-all duration-300 text-center"
              >
                View Services
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={800}>
            <div className="flex flex-wrap gap-6">
              {trustSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-cream-dark"
                >
                  <span className="text-lg">{signal.icon}</span>
                  <span className="text-sm text-charcoal font-medium">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-sage/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-sage/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
