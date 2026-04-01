import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/hero-bg-5sZatoehzcVvq3ZLHHQFRK.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/logo-white_09590d7c.png";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Luca's Barbershop Interior"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/40 to-[#0D0D0D]" />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative gold corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-[#C8A961]/20 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-[#C8A961]/20 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.img
            src={LOGO_URL}
            alt="Luca's Barbershop"
            className="h-20 md:h-28 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-[#C8A961] text-sm md:text-base tracking-[0.3em] mb-6"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Gold Line */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />

          {/* Slogan */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#E8E0D4] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {t("hero.slogan")}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[#E8E0D4]/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://n1238089.alteg.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#C8A961] text-[#0D0D0D] text-sm font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,97,0.3)] inline-block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="relative z-10">{t("hero.cta")}</span>
              <div className="absolute inset-0 bg-[#D4B96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <button
              onClick={() => scrollTo("#services")}
              className="px-10 py-4 border border-[#C8A961]/40 text-[#C8A961] text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#C8A961]/10 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("hero.services")}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C8A961]/50 to-transparent" />
        <ChevronDown className="text-[#C8A961]/50" size={20} />
      </motion.div>
    </section>
  );
}
