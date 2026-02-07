import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <AnimateOnScroll animation="slideInLeft">
            <div>
              <p className="text-sage font-medium text-sm tracking-widest uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                Your First Step Starts Here
              </h2>
              <p className="text-warm-gray leading-relaxed mb-10">
                Whether you have a question or are ready to book a consultation,
                reaching out is simple. All enquiries are treated with the utmost
                discretion.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">Phone</p>
                    <a
                      href="tel:+919148828642"
                      className="text-warm-gray hover:text-sage transition-colors"
                    >
                      +91 91488 28642
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">Email</p>
                    <a
                      href="mailto:doctorknowledgegeek@gmail.com"
                      className="text-warm-gray hover:text-sage transition-colors"
                    >
                      doctorknowledgegeek@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/919148828642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-gray hover:text-sage transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">Location</p>
                    <p className="text-warm-gray">Tumkur, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="mt-10">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-full font-medium hover:bg-sage-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Private Consultation
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Map & Emergency */}
          <AnimateOnScroll animation="slideInRight">
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-[4/3] bg-white rounded-2xl border border-cream-dark overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sage/5 to-sand/5 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-sage/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-warm-gray text-sm">Tumkur, Karnataka</p>
                    <p className="text-warm-gray/50 text-xs mt-1">
                      Map integration placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Resources */}
              <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                <h3 className="font-heading text-lg text-charcoal mb-4">
                  Crisis Resources
                </h3>
                <p className="text-warm-gray text-sm mb-4 leading-relaxed">
                  If you or someone you know is in immediate crisis, please
                  contact one of these helplines. Help is available 24/7.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-cream rounded-xl">
                    <div>
                      <p className="text-charcoal text-sm font-medium">
                        Vandrevala Foundation
                      </p>
                      <p className="text-warm-gray text-xs">24/7 Mental Health Helpline</p>
                    </div>
                    <a
                      href="tel:9999666555"
                      className="text-sage font-medium text-sm hover:text-sage-dark transition-colors"
                    >
                      9999 666 555
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cream rounded-xl">
                    <div>
                      <p className="text-charcoal text-sm font-medium">iCall</p>
                      <p className="text-warm-gray text-xs">
                        Psychosocial Helpline
                      </p>
                    </div>
                    <a
                      href="tel:9152987821"
                      className="text-sage font-medium text-sm hover:text-sage-dark transition-colors"
                    >
                      9152 987 821
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cream rounded-xl">
                    <div>
                      <p className="text-charcoal text-sm font-medium">
                        NIMHANS Helpline
                      </p>
                      <p className="text-warm-gray text-xs">Karnataka</p>
                    </div>
                    <a
                      href="tel:08046110007"
                      className="text-sage font-medium text-sm hover:text-sage-dark transition-colors"
                    >
                      080-46110007
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
