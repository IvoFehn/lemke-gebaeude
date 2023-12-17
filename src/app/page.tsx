"use client";
import HeroCarousel from "@/components/HeroCarousel";
import ElementorComponent from "@/components/ElementorComponent";
import AboutUs from "@/components/AboutUs";
import ServicveHero from "@/components/ServiceHero";
import ContactOptions from "@/components/ContactOptions";
import TestimonialsComponent from "@/components/TestimonialsComponent";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <section className="w-full h-full services__background">
        <ElementorComponent />
        <AboutUs />
      </section>
      <ServicveHero />
      <TestimonialsComponent />
      <ContactOptions />
    </main>
  );
}
