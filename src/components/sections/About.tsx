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
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-sage/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-5xl">👩‍⚕️</span>
                    </div>
                    <p className="text-warm-gray text-sm">Professional Portrait</p>
                    <p className="text-warm-gray/50 text-xs mt-1">
                      Replace with dr-suha.jpg
                    </p>
                  </div>
                </div>
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
                  educator dedicated to compassionate, patient-centred care. Known
                  for calm listening, clear communication, and a sincere
                  commitment to helping individuals and families heal.
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

              {/* Personal Note */}
              <div className="bg-cream rounded-2xl p-6 border-l-4 border-sage">
                <p className="text-sm font-medium text-sage mb-2 uppercase tracking-wider">
                  A Note from Dr. Suha
                </p>
                <p className="text-charcoal italic leading-relaxed">
                  &ldquo;I believe that seeking help is not a sign of weakness —
                  it is an act of courage. My role is to provide a safe, private
                  space where you can explore your challenges without judgment
                  and work toward meaningful, lasting change.&rdquo;
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
