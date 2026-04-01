import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-1_974a1403.png",
    alt: "Beard trimming",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/haircut-curly_46095ef2.png",
    alt: "Curly fade haircut",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-2_4f94c1c3.png",
    alt: "Professional haircut",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-3_64aecb12.png",
    alt: "Beard shaping",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-4_ab3448b5.png",
    alt: "Hair styling",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-5_0160f4c2.png",
    alt: "Barber at work",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-work-6_19e87e24.png",
    alt: "Beard work",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/barber-portrait_c3601325.png",
    alt: "Barber portrait",
  },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative section-padding overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A961] text-sm tracking-[0.3em] block mb-4" style={{ fontFamily: "var(--font-body)" }}>
            {t("gallery.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {t("gallery.title")}
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#E8E0D4]/50 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-6xl mx-auto">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-3 break-inside-avoid group cursor-pointer relative overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#0D0D0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#C8A961]/50 flex items-center justify-center bg-[#0D0D0D]/40 backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn className="text-[#C8A961]" size={20} />
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-[#C8A961]/0 group-hover:border-[#C8A961]/30 transition-all duration-500 rounded-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-[#E8E0D4]/60 hover:text-[#C8A961] transition-colors z-10 w-12 h-12 flex items-center justify-center border border-[#C8A961]/20 rounded-full hover:border-[#C8A961]/50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
