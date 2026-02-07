import AnimateOnScroll from "./AnimateOnScroll";

interface ServiceCardProps {
  icon: string;
  title: string;
  forWhom: string;
  outcomes: string;
  approach: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  forWhom,
  outcomes,
  approach,
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimateOnScroll animation="fadeInUp" delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-cream-dark group h-full">
        <div className="text-4xl mb-5">{icon}</div>
        <h3 className="font-heading text-xl text-charcoal mb-4 group-hover:text-sage-dark transition-colors">
          {title}
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-sage font-semibold text-xs uppercase tracking-wider">
              Who it&apos;s for
            </span>
            <p className="text-warm-gray mt-1 leading-relaxed">{forWhom}</p>
          </div>
          <div>
            <span className="text-sage font-semibold text-xs uppercase tracking-wider">
              Outcomes
            </span>
            <p className="text-warm-gray mt-1 leading-relaxed">{outcomes}</p>
          </div>
          <div>
            <span className="text-sage font-semibold text-xs uppercase tracking-wider">
              Approach
            </span>
            <p className="text-warm-gray mt-1 leading-relaxed">{approach}</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
