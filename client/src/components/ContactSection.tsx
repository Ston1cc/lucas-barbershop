import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.83a4.85 4.85 0 0 1-1-.14z" />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative section-padding overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A961] text-sm tracking-[0.3em] block mb-4" style={{ fontFamily: "var(--font-body)" }}>
            {t("contact.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {t("contact.title")}
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A961] mx-auto mt-6 mb-6" />
          <p className="text-[#E8E0D4]/50 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-5 p-6 bg-[#1A1A1A]/40 border border-[#C8A961]/10 rounded-sm hover:border-[#C8A961]/25 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C8A961]/10 rounded-sm shrink-0">
                <MapPin className="text-[#C8A961]" size={22} />
              </div>
              <div>
                <h4 className="text-[#E8E0D4] text-sm font-medium tracking-wider uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact.address")}
                </h4>
                <p className="text-[#E8E0D4]/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Strada Cartuşa 83/A, Chișinău, Moldova
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 p-6 bg-[#1A1A1A]/40 border border-[#C8A961]/10 rounded-sm hover:border-[#C8A961]/25 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C8A961]/10 rounded-sm shrink-0">
                <Phone className="text-[#C8A961]" size={22} />
              </div>
              <div>
                <h4 className="text-[#E8E0D4] text-sm font-medium tracking-wider uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact.phone")}
                </h4>
                <a
                  href="tel:+37361247774"
                  className="text-[#C8A961] text-lg hover:text-[#D4B96E] transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  +373 612 4 777 4
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-5 p-6 bg-[#1A1A1A]/40 border border-[#C8A961]/10 rounded-sm hover:border-[#C8A961]/25 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C8A961]/10 rounded-sm shrink-0">
                <Clock className="text-[#C8A961]" size={22} />
              </div>
              <div>
                <h4 className="text-[#E8E0D4] text-sm font-medium tracking-wider uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact.hours")}
                </h4>
                <p className="text-[#E8E0D4]/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact.hoursValue")}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-5 p-6 bg-[#1A1A1A]/40 border border-[#C8A961]/10 rounded-sm hover:border-[#C8A961]/25 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C8A961]/10 rounded-sm shrink-0">
                <Instagram className="text-[#C8A961]" size={22} />
              </div>
              <div>
                <h4 className="text-[#E8E0D4] text-sm font-medium tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  {t("contact.social")}
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/pickyblades/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#E8E0D4]/60 hover:text-[#C8A961] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@pickyblades"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#E8E0D4]/60 hover:text-[#C8A961] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <TikTokIcon size={18} />
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map - Using iframe embed for reliable dark styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden border border-[#C8A961]/10 relative"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.723861796522!2d28.745518976204472!3d47.01599457114173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97f0076591a57%3A0xb00f59dd851acd3!2sPickyBlades-BarberShop!5e1!3m2!1sen!2s!4v1775293939184!5m2!1sen!2s" 
            width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Picky Blades Barbershop Location">
            </iframe>
            {/* Gold overlay tint */}
            <div className="absolute inset-0 pointer-events-none bg-[#C8A961]/5 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
