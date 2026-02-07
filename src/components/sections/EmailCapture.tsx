"use client";

import { useState } from "react";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-sage">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fadeInUp">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Receive Our Mental Wellness Guide
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            A thoughtfully curated guide with insights on managing stress,
            building emotional resilience, and nurturing mental well-being.
            Delivered privately to your inbox.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white font-medium">
                Thank you. Your guide will arrive shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/50 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-sage-dark font-medium rounded-full hover:bg-cream transition-all duration-300 shadow-md cursor-pointer"
              >
                Send Me the Guide
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
