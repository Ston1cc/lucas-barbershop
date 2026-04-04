import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/branding/picky-blades-logo.png";
const BOOKING_URL = "https://www.fresha.com/a/picky-blades-barbershop-durlesti-str-cartusa-83-a-bfq7bckw?pId=2566033&gId=2566033&cId=2566033";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.contact", href: "#contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#C8A961]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="relative z-10"
          >
            <img
              src={LOGO_URL}
              alt="Picky Blades Barbershop"
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-sm font-medium tracking-wider text-[#E8E0D4]/70 hover:text-[#C8A961] transition-colors duration-300 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(item.key)}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2 border border-[#C8A961]/20 rounded-full px-1 py-1">
              <button
                onClick={() => setLang("ro")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === "ro"
                    ? "bg-[#C8A961] text-[#0D0D0D]"
                    : "text-[#E8E0D4]/60 hover:text-[#C8A961]"
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === "ru"
                    ? "bg-[#C8A961] text-[#0D0D0D]"
                    : "text-[#E8E0D4]/60 hover:text-[#C8A961]"
                }`}
              >
                RU
              </button>
            </div>

            {/* Book Now Button - External Link */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2.5 bg-[#C8A961] text-[#0D0D0D] text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[#D4B96E] transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,97,0.3)]"
            >
              {t("nav.bookNow")}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center gap-1 border border-[#C8A961]/20 rounded-full px-1 py-1">
              <button
                onClick={() => setLang("ro")}
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === "ro"
                    ? "bg-[#C8A961] text-[#0D0D0D]"
                    : "text-[#E8E0D4]/60"
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === "ru"
                    ? "bg-[#C8A961] text-[#0D0D0D]"
                    : "text-[#E8E0D4]/60"
                }`}
              >
                RU
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#E8E0D4] p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-medium tracking-widest text-[#E8E0D4] hover:text-[#C8A961] transition-colors uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-10 py-3 bg-[#C8A961] text-[#0D0D0D] text-lg font-semibold tracking-wider uppercase rounded-sm"
              >
                {t("nav.bookNow")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
