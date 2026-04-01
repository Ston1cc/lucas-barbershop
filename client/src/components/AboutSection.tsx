import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/about-bg-VpAP2whKortDTi2sNh2pRY.webp";
const OWNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/owner-suit_58bfae42.png";
const BARBER_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-portrait_c3601325.png";

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-bold text-[#C8A961] block" style={{ fontFamily: "var(--font-display)" }}>
        {isInView ? count : 0}+
      </span>
      <p className="text-[#E8E0D4]/50 text-xs mt-2 tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
        {label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={ABOUT_BG} alt="Interior premium Luca's Barbershop Chișinău" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section Label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[#C8A961] text-sm tracking-[0.3em] block mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("about.label")}
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            {t("about.title")}
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images - Completely different layout for mobile vs desktop */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile: Side-by-side equal images */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="relative rounded-sm overflow-hidden aspect-[3/4]">
                <img
                  src={BARBER_PORTRAIT}
                  alt="Barber at work"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Gold corner accent */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C8A961]/40" />
              </div>
              <div className="relative rounded-sm overflow-hidden aspect-[3/4]">
                <img
                  src={OWNER_IMG}
                  alt="Luca's Barbershop Owner"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Gold corner accent */}
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C8A961]/40" />
              </div>
            </div>

            {/* Desktop: Overlapping artistic layout */}
            <div className="relative hidden lg:block">
              <img
                src={OWNER_IMG}
                alt="Luca's Barbershop Owner"
                className="w-full max-w-md rounded-sm shadow-2xl"
              />
              {/* Floating second image */}
              <div className="absolute -bottom-8 -right-12 w-56">
                <img
                  src={BARBER_PORTRAIT}
                  alt="Barber at work"
                  className="w-full rounded-sm shadow-2xl border-2 border-[#C8A961]/20"
                />
              </div>
              {/* Gold accent corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C8A961]/30" />
              <div className="absolute -bottom-4 -right-16 w-16 h-16 border-b-2 border-r-2 border-[#C8A961]/20" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-[#E8E0D4]/80 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              {t("about.p1")}
            </p>
            <p className="text-[#E8E0D4]/70 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              {t("about.p2")}
            </p>
            <p className="text-[#E8E0D4]/70 text-base md:text-lg leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
              {t("about.p3")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#C8A961]/10">
              <AnimatedCounter target={5} label={t("about.years")} />
              <AnimatedCounter target={3000} label={t("about.clients")} />
              <AnimatedCounter target={5} label={t("about.barbers")} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
