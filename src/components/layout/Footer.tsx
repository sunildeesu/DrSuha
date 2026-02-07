import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl text-white mb-3">
              Dr. Suha Riyaz
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Consultant Psychiatrist
            </p>
            <p className="text-sm leading-relaxed max-w-md">
              Providing compassionate, confidential psychiatric care grounded in
              evidence and empathy. Every consultation is a step toward lasting
              change.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              All consultations are strictly confidential
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-sage-light transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-sage-light transition-colors">Services</a></li>
              <li><Link href="/booking" className="hover:text-sage-light transition-colors">Book Consultation</Link></li>
              <li><Link href="/assessment" className="hover:text-sage-light transition-colors">Self-Assessment</Link></li>
              <li><Link href="/blog" className="hover:text-sage-light transition-colors">Insights</Link></li>
              <li><Link href="/privacy" className="hover:text-sage-light transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+919148828642" className="hover:text-sage-light transition-colors">
                  +91 91488 28642
                </a>
              </li>
              <li>
                <a href="mailto:doctorknowledgegeek@gmail.com" className="hover:text-sage-light transition-colors">
                  doctorknowledgegeek@gmail.com
                </a>
              </li>
              <li className="text-white/50">Tumkur, Karnataka, India</li>
              <li className="text-white/50">Languages: English, Kannada, Hindi, Urdu</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/suha-riyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-sage-light transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@doctorknowledgegeek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-sage-light transition-colors"
                aria-label="Medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                Member of
              </p>
              <p className="text-xs text-white/50">
                Indian Psychiatric Society &bull; Royal College of Psychiatrists (UK)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Dr. Suha Riyaz. All rights reserved.</p>
          <p>MBBS, MD Psychiatry, MRCPsych (Part A)</p>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-charcoal border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-xs text-white/30 text-center">
            If you are in crisis, please contact{" "}
            <a href="tel:9152987821" className="text-white/50 underline">
              Vandrevala Foundation (9152987821)
            </a>{" "}
            or{" "}
            <a href="tel:9152987821" className="text-white/50 underline">
              iCall (9152987821)
            </a>{" "}
            for immediate support.
          </p>
        </div>
      </div>
    </footer>
  );
}
