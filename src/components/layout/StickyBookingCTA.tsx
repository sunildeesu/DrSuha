"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyBookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/booking"
      className={`fixed bottom-6 right-6 z-40 bg-sage text-white px-6 py-3.5 rounded-full shadow-lg hover:bg-sage-dark hover:shadow-xl transition-all duration-500 flex items-center gap-2 text-sm font-medium ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Book Consultation
    </Link>
  );
}
