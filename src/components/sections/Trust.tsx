import AnimateOnScroll from "../ui/AnimateOnScroll";

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

const googleReviews = [
  {
    name: "Sunil Kumar",
    text: "Dr Suha is calm, dedicated and reliable doctor. I highly recommend her. My Son is medium to severe Autistic. She has been his doctor from past 1 year. She has been always available. Her medication has helped my son to be calm and productive.",
    time: "11 reviews",
  },
  {
    name: "Ashitha R",
    text: "Dr Suha is one of the most empathetic and knowledgeable Psychiatrist I have ever met. She is highly proficient in treating and dealing with all sorts of mental health concerns. I highly recommend her to anybody seeking help regarding mental health.",
    time: "a month ago",
  },
  {
    name: "Padmashree R",
    text: "I had anxiety and depression for the past 2 years. After consulting Dr. Suha Riyaz, I have recovered significantly and I am feeling much better now.",
    time: "3 weeks ago",
  },
  {
    name: "Nirmal Raj P.L",
    text: "I highly recommend Dr. Suha Riyaz as a psychiatrist. She is patient, empathetic, and genuinely listens to her patients concerns. Her approach is calm, supportive, and nonjudgmental, which makes it easier to open up and feel understood.",
    time: "4 days ago",
  },
  {
    name: "Pavan M",
    text: "Dr. Suha Riyaz madam is very kind and patient. The online consultation was easy and helpful. She listened carefully and explained things clearly. I felt comfortable and got good guidance. I recommend her.",
    time: "3 weeks ago",
  },
  {
    name: "sindhu sn",
    text: "I feel truly grateful to know Dr. Suha, not just as a psychiatrist but also as a dear friend. Her approach to counselling is incredibly compassionate, patient, and insightful. She has a unique ability to make every conversation feel safe.",
    time: "2 months ago",
  },
  {
    name: "Anagha PG",
    text: "Dr Suha is very empathetic. Her advice were practical and well thought. She is also knowledgeable and thorough. I felt truly understood by her. I would highly recommend for anyone in need of help regarding mental health issues.",
    time: "4 days ago",
  },
  {
    name: "Sindhoor Hallera",
    text: "I had a very positive experience with the online consultation with Dr. Suha. She was calm, attentive, and genuinely empathetic.",
    time: "a month ago",
  },
  {
    name: "Samhitha K",
    text: "Dr. Suha is friendly, empathetic, truly professional and makes you feel heard and cared for. Highly recommend!!",
    time: "2 months ago",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

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

        {/* Google Reviews Section */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-12">
            <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
              Patient Experiences
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
              What Our Patients Say
            </h2>
            {/* Overall Rating Summary */}
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-charcoal font-semibold text-lg">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-warm-gray text-sm">based on 30+ reviews</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {googleReviews.map((review, i) => (
            <AnimateOnScroll key={review.name} animation="fadeInUp" delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-sage font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-charcoal font-medium text-sm truncate">
                      {review.name}
                    </p>
                    <p className="text-warm-gray/60 text-xs">{review.time}</p>
                  </div>
                </div>
                <StarRating />
                <p className="text-warm-gray text-sm leading-relaxed mt-3 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All on Google */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center">
            <a
              href="https://www.google.com/search?q=Dr+Suha+Riyaz+Psychiatrist+Karnataka+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors text-sm font-medium"
            >
              View all reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>

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
