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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Lemke Gebäudereinigung',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Karl-Kellner-Str.',
                addressLocality: 'Hannover',
                postalCode: '30853',
                addressCountry: 'DE',
              },
              telephone: '+49 511 7-900-900',
              email: 'service@lemke-geb\u00e4udereinigung.de',
            }),
          }}
        />
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
