"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sand-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg md:text-xl text-charcoal pr-8 group-hover:text-sage-dark transition-colors">
          {question}
        </span>
        <span
          className={`text-sage text-2xl transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-warm-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
