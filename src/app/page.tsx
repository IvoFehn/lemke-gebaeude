import HeroCarousel from "@/components/HeroCarousel";
import ElementorComponent from "@/components/ElementorComponent";
import AboutUs from "@/components/AboutUs";
import ServicveHero from "@/components/ServiceHero";
import ContactOptions from "@/components/ContactOptions";
import TestimonialsComponent from "@/components/TestimonialsComponent";
import CookieConsentBanner from "@/components/CookieBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lemke Gebäudereinigung",
  description: "Gebäudereinigungsservice von Lemke",
  keywords:
    "Gebäudereinigung Hannover, Familie Lemke Reinigungsservice, professionelle Gebäudereinigung Lemke Hannover, Büroreinigung Hannover, Fensterreinigung Hannover, Unterhaltsreinigung Hannover, Treppenhausreinigung Lemke, Teppichreinigung Hannover, Desinfektionsdienste Hannover, umweltfreundliche Reinigung Hannover, Reinigungsfirma Hannover, Lemke Reinigungsunternehmen, Gebäudereinigung Dienstleistungen Hannover, zuverlässige Reinigungskraft Hannover, Hausmeisterservice Hannover Lemke",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lemke-gebaeudereinigung.de/" },
  openGraph: {
    title: "Lemke Gebäudereinigung",
    description: "Gebäudereinigungsservice von Lemke",
    type: "website",
  },
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <>
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
