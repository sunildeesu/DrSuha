"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation =
  | "fadeInUp"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  className?: string;
}

const animationClasses: Record<Animation, string> = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
};

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.15,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
