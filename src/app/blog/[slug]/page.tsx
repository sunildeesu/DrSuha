import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchArticles } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articles = await fetchArticles();
  const article = articles.find((a) => a.slug === slug);
  return {
    title: article
      ? `${article.title} — Dr. Suha Riyaz`
      : "Article — Dr. Suha Riyaz",
    description: article?.excerpt ?? "Insights on mental wellness by Dr. Suha Riyaz",
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const articles = await fetchArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-cream pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl text-charcoal mb-4">
            Article Not Found
          </h1>
          <p className="text-warm-gray mb-8">
            This article may have been moved or is coming soon.
          </p>
          <Link
            href="/blog"
            className="text-sage hover:text-sage-dark transition-colors"
          >
            &larr; View all articles
          </Link>
        </div>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-sage text-sm hover:text-sage-dark transition-colors mb-8 inline-block"
        >
          &larr; Back to insights
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sage text-xs font-medium uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-warm-gray/50 text-xs">{article.date}</span>
            <span className="text-warm-gray/50 text-xs">
              {article.readTime}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-charcoal leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/dr-suha.webp"
                alt="Dr. Suha Riyaz"
                width={40}
                height={40}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-charcoal text-sm font-medium">
                Dr. Suha Riyaz
              </p>
              <p className="text-warm-gray text-xs">
                Consultant Psychiatrist &bull; Project Heal Self
              </p>
            </div>
          </div>
        </div>

        {/* Article Content Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-cream-dark">
          <p className="text-warm-gray leading-relaxed text-lg mb-8">
            {article.excerpt}
          </p>

          <div className="border-t border-cream-dark pt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-charcoal mb-3">
                Continue Reading on Medium
              </h3>
              <p className="text-warm-gray text-sm mb-6 max-w-md mx-auto leading-relaxed">
                This article is published as part of{" "}
                <span className="text-charcoal font-medium">Project Heal Self</span>,
                Dr. Suha Riyaz&apos;s collection of insights on mental health,
                emotional resilience, and the human experience.
              </p>
              <a
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-3.5 rounded-full font-medium hover:bg-charcoal/80 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Read Full Article on Medium
              </a>
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="mt-8 bg-white rounded-2xl p-8 border border-cream-dark text-center">
          <h3 className="font-heading text-xl text-charcoal mb-3">
            Would You Like to Discuss This Further?
          </h3>
          <p className="text-warm-gray text-sm mb-6 max-w-md mx-auto">
            If this article resonated with you, a confidential consultation with
            Dr. Suha may be a meaningful next step.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-sage-dark transition-all duration-300"
          >
            Book a Private Consultation
          </Link>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-heading text-xl text-charcoal mb-6">
              Related Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-6 border border-cream-dark hover:shadow-md transition-all duration-500">
                    <span className="text-sage text-xs font-medium uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-heading text-lg text-charcoal mt-2 mb-2 group-hover:text-sage-dark transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-warm-gray text-sm leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
