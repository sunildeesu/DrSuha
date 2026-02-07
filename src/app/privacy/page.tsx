import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Dr. Suha Riyaz",
  description: "Privacy policy for Dr. Suha Riyaz's psychiatric practice.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="text-sage text-sm hover:text-sage-dark transition-colors mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-cream-dark space-y-8">
          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-warm-gray leading-relaxed">
              Dr. Suha Riyaz&apos;s practice is built on the foundation of trust
              and confidentiality. We are deeply committed to protecting your
              personal information and ensuring that every interaction —
              whether online or in-person — upholds the highest standards of
              privacy and medical ethics.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Information We Collect
            </h2>
            <p className="text-warm-gray leading-relaxed mb-3">
              We may collect the following information when you interact with
              this website:
            </p>
            <ul className="space-y-2 text-warm-gray text-sm">
              <li className="pl-4 border-l-2 border-sage/20">
                Contact information provided through booking forms (name, email,
                phone number)
              </li>
              <li className="pl-4 border-l-2 border-sage/20">
                Consultation preferences and intake form responses
              </li>
              <li className="pl-4 border-l-2 border-sage/20">
                Email addresses submitted for wellness guide subscriptions
              </li>
              <li className="pl-4 border-l-2 border-sage/20">
                Self-assessment responses (these are processed locally in your
                browser and are not stored on our servers)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              How We Use Your Information
            </h2>
            <p className="text-warm-gray leading-relaxed">
              Your information is used solely for the purpose of providing and
              improving your care experience. We do not sell, rent, or share your
              personal information with any third parties. Information provided
              during consultations is protected by doctor-patient
              confidentiality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Medical Confidentiality
            </h2>
            <p className="text-warm-gray leading-relaxed">
              All clinical information shared during consultations is governed
              by medical confidentiality laws and professional ethics guidelines.
              No clinical information will be disclosed to any third party
              without your explicit written consent, except where required by
              law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Data Security
            </h2>
            <p className="text-warm-gray leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Your Rights
            </h2>
            <p className="text-warm-gray leading-relaxed">
              You have the right to access, correct, or request deletion of your
              personal information at any time. To exercise these rights, please
              contact us at{" "}
              <a
                href="mailto:doctorknowledgegeek@gmail.com"
                className="text-sage hover:text-sage-dark transition-colors"
              >
                doctorknowledgegeek@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Contact
            </h2>
            <p className="text-warm-gray leading-relaxed">
              If you have any questions about this privacy policy or how your
              data is handled, please reach out to us at{" "}
              <a
                href="mailto:doctorknowledgegeek@gmail.com"
                className="text-sage hover:text-sage-dark transition-colors"
              >
                doctorknowledgegeek@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+919148828642"
                className="text-sage hover:text-sage-dark transition-colors"
              >
                +91 91488 28642
              </a>
              .
            </p>
          </section>

          <p className="text-warm-gray/50 text-xs pt-4 border-t border-cream-dark">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
