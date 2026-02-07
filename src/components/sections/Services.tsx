import AnimateOnScroll from "../ui/AnimateOnScroll";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    icon: "🌸",
    title: "Women's Emotional Health",
    forWhom:
      "Women navigating hormonal changes, postpartum challenges, PCOS-related mood shifts, or life transitions.",
    outcomes:
      "Emotional stability, clarity, improved self-care, and resilience through life's phases.",
    approach:
      "Supportive psychotherapy, mindfulness-based techniques, and medication management when needed.",
  },
  {
    icon: "🧘",
    title: "Anxiety & Stress Management",
    forWhom:
      "Professionals, students, and individuals experiencing persistent worry, burnout, panic, or bodily distress.",
    outcomes:
      "Reduced anxiety, better coping mechanisms, improved daily functioning, and restored calm.",
    approach:
      "CBT, mindfulness-based therapy, stress management techniques, and evidence-based pharmacotherapy.",
  },
  {
    icon: "🌊",
    title: "Mood & Emotional Regulation",
    forWhom:
      "Individuals struggling with depression, mood swings, insomnia, or emotional instability.",
    outcomes:
      "Stabilized mood, improved sleep, emotional balance, and renewed motivation.",
    approach:
      "Integrated pharmacotherapy, emotional regulation therapy, and supportive psychotherapy.",
  },
  {
    icon: "💑",
    title: "Couples & Relationship Therapy",
    forWhom:
      "Couples facing communication breakdowns, trust issues, conflicts, or emotional distance.",
    outcomes:
      "Deeper understanding, healthier communication, conflict resolution, and relationship renewal.",
    approach:
      "Certified couples therapy techniques, communication skills training, and structured sessions.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Child Behaviour & Parenting",
    forWhom:
      "Parents concerned about school refusal, behavioural issues, exam stress, or developmental challenges in children.",
    outcomes:
      "Improved child behaviour, better parent-child dynamics, reduced school-related stress.",
    approach:
      "Behaviour therapy, parenting guidance, exam stress management, and family-centered interventions.",
  },
  {
    icon: "🛡",
    title: "Addiction & Recovery",
    forWhom:
      "Individuals and families affected by substance use, behavioural addictions, or dependency patterns.",
    outcomes:
      "Sustained recovery, healthier coping patterns, family healing, and relapse prevention.",
    approach:
      "De-addiction care, motivational interviewing, relapse prevention strategies, and family counselling.",
  },
  {
    icon: "🌱",
    title: "Personality & Personal Growth",
    forWhom:
      "Individuals seeking to understand personality patterns, improve emotional stability, or develop communication skills.",
    outcomes:
      "Greater self-awareness, emotional resilience, improved interpersonal skills, and personal development.",
    approach:
      "DBT-informed skills, personality development sessions, and supportive psychotherapy.",
  },
  {
    icon: "🎯",
    title: "Academic & Career Counselling",
    forWhom:
      "Students and professionals dealing with career confusion, exam pressure, performance anxiety, or academic stress.",
    outcomes:
      "Clarity of direction, improved performance, reduced academic anxiety, and confident decision-making.",
    approach:
      "Career guidance, exam stress management, communication skills training, and goal-oriented therapy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
              Specialized Care
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Services Tailored to Your Needs
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Every individual&apos;s journey is unique. Dr. Suha offers a comprehensive
              range of psychiatric services, each delivered with the same commitment
              to confidentiality, empathy, and clinical excellence.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Therapies Banner */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-cream-dark">
            <h3 className="font-heading text-2xl text-charcoal mb-6 text-center">
              Therapeutic Modalities
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Cognitive Behaviour Therapy (CBT)",
                "Dialectical Behaviour Therapy (DBT)",
                "Mindfulness-Based Therapy",
                "Supportive Psychotherapy",
                "Emotional Regulation Therapy",
                "Couples Counselling",
                "Stress & Burnout Management",
                "Communication Skills Training",
              ].map((therapy) => (
                <span
                  key={therapy}
                  className="px-4 py-2 bg-cream rounded-full text-sm text-charcoal border border-cream-dark"
                >
                  {therapy}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
