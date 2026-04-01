import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, CheckCircle, Calendar, Clock, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const BOOKING_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/booking-bg-BfgrnzSCtQqoREe4BA9mYQ.webp";

const serviceOptions = [
  { key: "service.complex.name", price: "350" },
  { key: "service.haircut.name", price: "250" },
  { key: "service.kids.name", price: "250" },
  { key: "service.royalHead.name", price: "200" },
  { key: "service.royalBeard.name", price: "200" },
  { key: "service.hairColor.name", price: "150" },
  { key: "service.styling.name", price: "50" },
  { key: "service.blackMask.name", price: "100" },
  { key: "service.wax.name", price: "50/100" },
  { key: "service.beardShape.name", price: "150" },
  { key: "service.beardColor.name", price: "150" },
  { key: "service.eyebrowColor.name", price: "100" },
  { key: "service.eyebrowShape.name", price: "50" },
  { key: "service.simpleHaircut.name", price: "200" },
];

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30",
];

export default function BookingSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      toast.error("Completati toate campurile obligatorii");
      return;
    }
    setSubmitted(true);
    toast.success(t("booking.success"));
  };

  const inputClass = "w-full bg-[#1A1A1A]/80 border border-[#C8A961]/15 rounded-sm px-4 py-3.5 text-[#E8E0D4] text-sm placeholder:text-[#E8E0D4]/30 focus:outline-none focus:border-[#C8A961]/50 transition-colors";

  return (
    <section id="booking" className="relative section-padding overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-8">
        <img src={BOOKING_BG} alt="Programări online Luca's Barbershop Chișinău" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A961] text-sm tracking-[0.3em] block mb-4" style={{ fontFamily: "var(--font-body)" }}>
            {t("booking.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {t("booking.title")}
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A961] mx-auto mt-6 mb-6" />
          <p className="text-[#E8E0D4]/50 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {t("booking.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 bg-[#1A1A1A]/40 border border-[#C8A961]/20 rounded-sm"
            >
              <CheckCircle className="mx-auto text-[#C8A961] mb-6" size={64} />
              <h3 className="text-2xl text-[#E8E0D4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                {t("booking.success")}
              </h3>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", service: "", date: "", time: "", message: "" }); }}
                className="mt-6 px-8 py-3 border border-[#C8A961]/40 text-[#C8A961] text-sm tracking-wider uppercase hover:bg-[#C8A961]/10 transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                OK
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 p-8 md:p-10 bg-[#1A1A1A]/30 border border-[#C8A961]/10 rounded-sm"
            >
              {/* Name */}
              <div>
                <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                  <User size={14} className="text-[#C8A961]" />
                  {t("booking.name")} *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("booking.namePlaceholder")}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                  <Phone size={14} className="text-[#C8A961]" />
                  {t("booking.phone")} *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t("booking.phonePlaceholder")}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                  <Calendar size={14} className="text-[#C8A961]" />
                  {t("booking.service")} *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputClass} appearance-none`}
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                >
                  <option value="" className="bg-[#1A1A1A]">{t("booking.servicePlaceholder")}</option>
                  {serviceOptions.map((s) => (
                    <option key={s.key} value={t(s.key)} className="bg-[#1A1A1A]">
                      {t(s.key)} — {s.price} MDL
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                    <Calendar size={14} className="text-[#C8A961]" />
                    {t("booking.date")} *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
                    required
                  />
                </div>
                <div>
                  <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                    <Clock size={14} className="text-[#C8A961]" />
                    {t("booking.time")}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`${inputClass} appearance-none`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="" className="bg-[#1A1A1A]">{t("booking.timePlaceholder")}</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1A1A1A]">{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#E8E0D4]/60 text-xs tracking-wider uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
                  <MessageSquare size={14} className="text-[#C8A961]" />
                  {t("booking.message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("booking.messagePlaceholder")}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#C8A961] text-[#0D0D0D] text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#D4B96E] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,97,0.3)] rounded-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("booking.submit")}
              </button>

              {/* Call CTA */}
              <div className="text-center pt-4">
                <p className="text-[#E8E0D4]/40 text-sm mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  {t("booking.callUs")}
                </p>
                <a
                  href="tel:+37361247774"
                  className="text-[#C8A961] text-lg hover:text-[#D4B96E] transition-colors inline-flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  <Phone size={18} />
                  +373 612 4 777 4
                </a>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
