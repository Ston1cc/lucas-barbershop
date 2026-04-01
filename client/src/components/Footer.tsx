import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475821630/NctuC8YR9W7WstCC9oiRQv/logo-white_09590d7c.png";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.83a4.85 4.85 0 0 1-1-.14z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-[#C8A961]/10" style={{ background: "#080808" }}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img
              src={LOGO_URL}
              alt="Luca's Barbershop"
              className="h-10 mx-auto md:mx-0 mb-3"
            />
            <p
              className="text-[#C8A961]/60 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["#home", "#about", "#services", "#gallery", "#contact"].map((href) => {
              const key = `nav.${href.replace("#", "")}`;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-[#E8E0D4]/40 text-xs tracking-wider uppercase hover:text-[#C8A961] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(key)}
                </a>
              );
            })}
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right space-y-3">
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/lucas__barbershop_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#C8A961]/20 rounded-full text-[#E8E0D4]/50 hover:text-[#C8A961] hover:border-[#C8A961]/50 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@lucas__barbershop_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#C8A961]/20 rounded-full text-[#E8E0D4]/50 hover:text-[#C8A961] hover:border-[#C8A961]/50 transition-all"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
            <a
              href="tel:+37361247774"
              className="text-[#E8E0D4]/40 text-sm hover:text-[#C8A961] transition-colors flex items-center justify-center md:justify-end gap-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Phone size={14} />
              +373 612 4 777 4
            </a>
            <p className="text-[#E8E0D4]/30 text-xs flex items-center justify-center md:justify-end gap-2" style={{ fontFamily: "var(--font-body)" }}>
              <MapPin size={14} />
              Strada Alexandru cel Bun 62, Chișinău
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#C8A961]/5 text-center">
          <p className="text-[#E8E0D4]/20 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Luca's Barbershop. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
