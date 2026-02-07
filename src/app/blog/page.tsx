import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights — Dr. Suha Riyaz | Project Heal Self",
  description:
    "Thoughtful articles on mental health, emotional resilience, modern stress, and wellness by Dr. Suha Riyaz. Published on Medium as Project Heal Self.",
};

const categories = [
  "All",
  "Emotional Resilience",
  "Modern Stress",
  "Mental Performance",
  "Leadership & Mental Health",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="text-sage text-sm hover:text-sage-dark transition-colors mb-4 inline-block"
          >
            &larr; Back to home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Insights &amp; Perspectives
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed mb-2">
            Thoughtful perspectives on mental health, emotional well-being, and
            the human experience — written by Dr. Suha Riyaz.
          </p>
          <a
            href="https://medium.com/@doctorknowledgegeek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            Follow on Medium — Project Heal Self
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer ${
                cat === "All"
                  ? "bg-sage text-white"
                  : "bg-white text-warm-gray hover:bg-sage/10 border border-cream-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                <div className="aspect-[16/10] bg-gradient-to-br from-sage/10 to-sand/10 flex items-center justify-center">
                  <span className="text-4xl opacity-30">📝</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sage text-xs font-medium uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-warm-gray/50 text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-lg text-charcoal mb-3 group-hover:text-sage-dark transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-warm-gray text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sage text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-warm-gray text-xs">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Medium CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@doctorknowledgegeek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-sand text-charcoal px-8 py-4 rounded-full font-medium hover:bg-sand/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            Follow Dr. Suha on Medium
          </a>
        </div>
      </div>
    </div>
  );
}
