import CardComponent from "@/components/ui/CardComponent";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Karriere - Lemke Gebäudereinigung",
  description: "Offene Stellen bei Lemke Gebäudereinigung",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lemke-gebaeudereinigung.de/career" },
};

type Props = {};

export type Job = {
  title: string;
  image: string;
  description: string;
  url: string;
  altText: string;
};

const jobs: Job[] = [
  {
    title: "Gebäudereiniger (m/w/d)",
    image: "/elevator_clean.webp",
    description:
      "Gebäudereiniger gesucht: Erfahrung erwünscht, Zuverlässigkeit und Sorgfalt erforderlich. Bieten faire Bezahlung, flexible Zeiten. Verstärken Sie unser Team! Bewerbungen jetzt willkommen.",
    url: "",
    altText: "A cleaning service cleans an elevator",
  },
  {
    title: "Fensterreiniger (m/w/d)",
    image: "/surface_clean.webp",
    description:
      "Engagierter Fensterputzer gesucht. Erfahrung in Gebäudereinigung von Vorteil. Wir bieten Sorgfalt, Zuverlässigkeit, faire Bezahlung, flexible Arbeitszeiten. Werden Sie Teil unseres Teams. Bewerben Sie sich jetzt!",
    url: "",
    altText: "A person cleans a surface with a sponge",
  },
  // {
  //   title: "Reinigungsmeister",
  //   image: "/vacuuming_carpet.webp",
  //   description: "Testdescription",
  //   url: "www.google.de",
  //   altText: "Test",
  // },
];

const page = (props: Props) => {
  return (
    <div className="w-full h-full services__background">
      <div className="flex justify-center align-center flex-wrap px-[10vw] gap-8 py-16">
        {jobs.map((job, index) => {
          return (
            <div key={index} className="basis-1/3">
              <CardComponent
                title={job.title}
                image={job.image}
                description={job.description}
                url={job.url}
                altText={job.altText}
              />
            </div>
          );
        })}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobs.map((job) => ({
              '@context': 'https://schema.org',
              '@type': 'JobPosting',
              title: job.title,
              description: job.description,
              hiringOrganization: {
                '@type': 'Organization',
                name: 'Lemke Gebäudereinigung',
              },
            }))
          ),
        }}
      />
    </div>
  );
};

export default page;
