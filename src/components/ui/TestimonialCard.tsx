interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
      <div className="text-sage text-4xl font-heading mb-4">&ldquo;</div>
      <p className="text-warm-gray leading-relaxed italic mb-6">{quote}</p>
      <div>
        <p className="text-charcoal font-semibold text-sm">{author}</p>
        <p className="text-warm-gray text-xs">{role}</p>
      </div>
    </div>
  );
}
