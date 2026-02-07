import AnimateOnScroll from "../ui/AnimateOnScroll";
import FAQItem from "../ui/FAQItem";

const faqs = [
  {
    question: "Is my consultation completely confidential?",
    answer:
      "Absolutely. Confidentiality is the cornerstone of this practice. Every conversation, record, and piece of information you share is strictly protected by medical confidentiality laws and professional ethics. Nothing is disclosed without your explicit consent.",
  },
  {
    question: "Will seeking psychiatric help affect my career or reputation?",
    answer:
      "No. Seeking psychiatric care is a private medical decision and is protected by doctor-patient confidentiality. Your employer, colleagues, or anyone else will not be informed. In fact, addressing mental health concerns proactively often enhances professional performance and personal well-being.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Secure video consultations are available for individuals across India and abroad. Online sessions are conducted through a private, secure platform and offer the same quality of care as in-person visits — with the added convenience of accessing help from wherever you are.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "The first session is a comprehensive, unhurried conversation where Dr. Suha listens to your concerns, understands your history, and begins to form a picture of how best to help you. There is no pressure — the goal is for you to feel heard, understood, and comfortable. Together, you will discuss a personalized path forward.",
  },
  {
    question: "What languages are consultations available in?",
    answer:
      "Dr. Suha consults in English, Kannada, Hindi, and Urdu. You are welcome to communicate in whichever language feels most comfortable for you.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "Dr. Suha makes every effort to accommodate consultations as promptly as possible. Depending on availability, appointments can often be arranged within a few days. For urgent concerns, please reach out directly by phone or WhatsApp.",
  },
  {
    question: "Do you treat children and adolescents?",
    answer:
      "Yes. Dr. Suha provides care for child behaviour concerns, school refusal, exam stress, and parenting challenges. Sessions for younger patients are often conducted alongside parents or caregivers to ensure a supportive, family-centered approach.",
  },
  {
    question: "What therapies and treatment approaches do you offer?",
    answer:
      "Dr. Suha offers a range of evidence-based therapies including Cognitive Behaviour Therapy (CBT), Dialectical Behaviour Therapy (DBT), Mindfulness-Based Therapy, Supportive Psychotherapy, Couples Therapy, and Emotional Regulation Therapy. Medication management is also available when clinically appropriate, always as part of a holistic treatment plan.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
              Common Questions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Answers Before You Ask
            </h2>
            <p className="text-warm-gray leading-relaxed">
              It&apos;s natural to have questions before reaching out. Here are
              answers to what patients most often want to know.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
