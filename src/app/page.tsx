"use client";
import HeroCarousel from "@/components/HeroCarousel";
import ElementorComponent from "@/components/ElementorComponent";
import AboutUs from "@/components/AboutUs";
import ServicveHero from "@/components/ServiceHero";
import ContactOptions from "@/components/ContactOptions";
import TestimonialsComponent from "@/components/TestimonialsComponent";
import Head from "next/head";
import CookieConsentBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemke Gebäudereinigung</title>
        <meta name="description" content="Gebäudereinigungsservice von Lemke" />
        <meta
          name="keywords"
          content="Gebäudereinigung Hannover, Familie Lemke Reinigungsservice, professionelle Gebäudereinigung Lemke Hannover, Büroreinigung Hannover, Fensterreinigung Hannover, Unterhaltsreinigung Hannover, Treppenhausreinigung Lemke, Teppichreinigung Hannover, Desinfektionsdienste Hannover, umweltfreundliche Reinigung Hannover, Reinigungsfirma Hannover, Lemke Reinigungsunternehmen, Gebäudereinigung Dienstleistungen Hannover, zuverlässige Reinigungskraft Hannover, Hausmeisterservice Hannover Lemke"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Lemke Gebäudereinigung" />
        <meta
          property="og:description"
          content="Gebäudereinigungsservice von Lemke"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lemke-gebaeudereinigung.de/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroCarousel />
        <section className="w-full h-full services__background">
          <ElementorComponent />
          <AboutUs />
        </section>
        <ServicveHero />
        <TestimonialsComponent />
        <ContactOptions />
        <CookieConsentBanner />
      </main>
    </>
  );
}
