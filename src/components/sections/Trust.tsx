import AnimateOnScroll from "../ui/AnimateOnScroll";
import TestimonialCard from "../ui/TestimonialCard";

const commitments = [
  {
    title: "Strict Confidentiality",
    description:
      "Every conversation, record, and detail of your care is protected by the highest standards of medical confidentiality.",
    icon: "🔒",
  },
  {
    title: "Ethical Practice",
    description:
      "Care is delivered in full accordance with medical ethics, professional guidelines, and a deep respect for your autonomy.",
    icon: "⚖️",
  },
  {
    title: "Evidence-Based Care",
    description:
      "Treatment plans are rooted in current psychiatric research and internationally recognized therapeutic standards.",
    icon: "🔬",
  },
  {
    title: "Non-Judgmental Space",
    description:
      "Whatever you are going through, you will be met with compassion, understanding, and zero judgment.",
    icon: "🤝",
  },
];

const testimonials = [
  {
    quote:
      "Dr. Suha made me feel heard from the very first session. For the first time, I felt that someone genuinely understood what I was going through. The change has been remarkable.",
    author: "A.K.",
    role: "Professional, Bangalore",
  },
  {
    quote:
      "I was hesitant about seeking help for years. Dr. Suha's calm, non-judgmental approach made all the difference. I finally feel like myself again.",
    author: "R.M.",
    role: "Parent & Educator",
  },
  {
    quote:
      "The online consultation was seamless and private. Dr. Suha's expertise and warmth came through even through a screen. Highly recommended.",
    author: "S.P.",
    role: "Working Professional",
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Commitments */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
              Our Promise
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Built on Trust, Guided by Ethics
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Trust is the foundation of every therapeutic relationship. These are
              the principles that guide every interaction at this practice.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {commitments.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fadeInUp" delay={i * 150}>
              <div className="text-center p-6 rounded-2xl bg-cream border border-cream-dark">
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

        {/* Testimonials */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-12">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
              Patient Experiences
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
              Words That Inspire Our Work
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 150}>
              <TestimonialCard {...testimonial} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Memberships */}
        <AnimateOnScroll animation="fadeIn" delay={200}>
          <div className="mt-16 text-center">
            <p className="text-warm-gray text-sm mb-4">Professional Memberships</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="px-6 py-3 bg-cream rounded-full border border-cream-dark">
                <p className="text-charcoal text-sm font-medium">
                  Indian Psychiatric Society
                </p>
                <p className="text-warm-gray text-xs">Life Ordinary Member</p>
              </div>
              <div className="px-6 py-3 bg-cream rounded-full border border-cream-dark">
                <p className="text-charcoal text-sm font-medium">
                  Royal College of Psychiatrists
                </p>
                <p className="text-warm-gray text-xs">MRCPsych Part A</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
