import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Crown, Palette, Sparkles, Droplets, Eye } from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/services-bg-ZEP3cZcCCaVtixQUJQ2Gx4.webp";

interface ServiceItem {
  nameKey: string;
  descKey: string;
  price: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const services: ServiceItem[] = [
  { nameKey: "service.complex.name", descKey: "service.complex.desc", price: "350", icon: <Crown size={22} />, featured: true },
  { nameKey: "service.haircut.name", descKey: "service.haircut.desc", price: "250", icon: <Scissors size={22} /> },
  { nameKey: "service.kids.name", descKey: "service.kids.desc", price: "250", icon: <Scissors size={22} /> },
  { nameKey: "service.royalHead.name", descKey: "service.royalHead.desc", price: "200", icon: <Crown size={22} /> },
  { nameKey: "service.royalBeard.name", descKey: "service.royalBeard.desc", price: "200", icon: <Crown size={22} /> },
  { nameKey: "service.hairColor.name", descKey: "service.hairColor.desc", price: "150", icon: <Palette size={22} /> },
  { nameKey: "service.styling.name", descKey: "service.styling.desc", price: "50", icon: <Sparkles size={22} /> },
  { nameKey: "service.blackMask.name", descKey: "service.blackMask.desc", price: "100", icon: <Droplets size={22} /> },
  { nameKey: "service.wax.name", descKey: "service.wax.desc", price: "50/100", icon: <Sparkles size={22} /> },
  { nameKey: "service.beardShape.name", descKey: "service.beardShape.desc", price: "150", icon: <Scissors size={22} /> },
  { nameKey: "service.beardColor.name", descKey: "service.beardColor.desc", price: "150", icon: <Palette size={22} /> },
  { nameKey: "service.eyebrowColor.name", descKey: "service.eyebrowColor.desc", price: "100", icon: <Eye size={22} /> },
  { nameKey: "service.eyebrowShape.name", descKey: "service.eyebrowShape.desc", price: "50", icon: <Eye size={22} /> },
  { nameKey: "service.simpleHaircut.name", descKey: "service.simpleHaircut.desc", price: "200", icon: <Scissors size={22} /> },
];

function ServiceCard({ service, index, isInView }: { service: ServiceItem; index: number; isInView: boolean }) {
  const { t } = useLanguage();

  const goToBooking = () => {
    window.open("https://n1238089.alteg.io/", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`group relative p-6 rounded-sm transition-all duration-500 cursor-pointer ${
        service.featured
          ? "bg-[#C8A961]/10 border border-[#C8A961]/30 hover:border-[#C8A961]/60"
          : "bg-[#1A1A1A]/60 border border-[#C8A961]/10 hover:border-[#C8A961]/30"
      } hover:shadow-[0_0_30px_rgba(200,169,97,0.08)] hover:bg-[#1A1A1A]/80`}
      onClick={goToBooking}
    >
      {service.featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#C8A961] text-[#0D0D0D] text-[10px] font-bold tracking-widest uppercase">
          POPULAR
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#C8A961] group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
            <h3
              className="text-lg text-[#E8E0D4] group-hover:text-[#C8A961] transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {t(service.nameKey)}
            </h3>
          </div>
          <p className="text-[#E8E0D4]/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {t(service.descKey)}
          </p>
        </div>
        <div className="text-right shrink-0">
          <span
            className="text-2xl text-[#C8A961]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {service.price}
          </span>
          <span className="text-[#C8A961]/60 text-xs block" style={{ fontFamily: "var(--font-body)" }}>
            {t("services.currency")}
          </span>
        </div>
      </div>

      {/* Hover reveal book button */}
      <div className="mt-3 pt-3 border-t border-[#C8A961]/0 group-hover:border-[#C8A961]/10 transition-all duration-300 overflow-hidden max-h-0 group-hover:max-h-12">
        <span
          className="text-[#C8A961] text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("services.bookService")} &rarr;
        </span>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative section-padding overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src={SERVICES_BG} alt="Servicii barbershop premium tuns și barbă" className="w-full h-full object-cover" />
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
            {t("services.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {t("services.title")}
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#E8E0D4]/50 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.nameKey} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
