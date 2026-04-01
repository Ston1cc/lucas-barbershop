import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const BOOKING_URL = "https://n1238089.alteg.io/";

export default function StickyBookButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[#C8A961] text-[#0D0D0D] font-semibold text-sm tracking-wider uppercase rounded-full shadow-[0_0_30px_rgba(200,169,97,0.3)] hover:bg-[#D4B96E] hover:shadow-[0_0_40px_rgba(200,169,97,0.4)] transition-all duration-300 md:px-6 md:py-3.5"
          style={{ fontFamily: "var(--font-body)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={18} />
          <span className="hidden sm:inline">{t("nav.bookNow")}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
