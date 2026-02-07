import AnimateOnScroll from "../ui/AnimateOnScroll";

const features = [
  {
    title: "Private Environment",
    description:
      "Consultations take place in a calm, private setting — no crowded waiting rooms, no rushed appointments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "Appointments are available at times that suit your schedule, including options for extended sessions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Secure Online Consultations",
    description:
      "Access world-class psychiatric care from the comfort of your home through secure video consultations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Personalized Care Plans",
    description:
      "Every treatment plan is uniquely tailored — because your journey toward healing is unlike anyone else's.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

export default function Discretion() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <AnimateOnScroll animation="slideInLeft">
            <div>
              <p className="text-sage-light font-medium text-sm tracking-widest uppercase mb-4">
                A Different Standard of Care
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
                For Individuals Who Value Discretion
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Your privacy is not just protected — it is prioritized. From the
                moment you reach out, every detail of your experience is designed
                around your comfort and confidentiality. This is psychiatric care
                that respects both your time and your trust.
              </p>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                All information shared is protected by medical confidentiality
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} animation="slideInRight" delay={i * 150}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                  <div className="text-sage-light shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-heading text-lg text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
