import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";
import { articles } from "@/lib/articles";

const featured = articles.slice(0, 3);

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
                Insights &bull; Project Heal Self
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                Perspectives on Mental Wellness
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sage hover:text-sage-dark transition-colors text-sm font-medium flex items-center gap-2"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article, i) => (
            <AnimateOnScroll key={article.slug} animation="fadeInUp" delay={i * 150}>
              <Link href={`/blog/${article.slug}`} className="group block h-full">
                <article className="bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-sage/10 to-sand/10 flex items-center justify-center">
                    <span className="text-4xl opacity-30">📝</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sage text-xs font-medium uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-warm-gray text-xs">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg text-charcoal mb-3 group-hover:text-sage-dark transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 text-sage text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
