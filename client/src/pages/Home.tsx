import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";

export default function Home() {
  useEffect(() => {
    document.title = "Luca's Barbershop \u2014 Barbershop Premium Chi\u0219in\u0103u";
  }, []);
  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <StickyBookButton />
    </div>
  );
}
