import React from "react";
import Image from "next/image";
import CountUpComponent from "./CountUpComponent";
import { ImEarth } from "react-icons/im";
import { FaClock } from "react-icons/fa";
import { GiMagicBroom } from "react-icons/gi";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section
      className="mt-5 4k:px-[20vw] xl:px-0 mx-auto flex lg:flex-col gap-12"
      id="about"
    >
      <div className="basis-1/2 w-full">
        <figure className="flex items-center justify-center lg:px-4">
          <Image
            src="/green_cleaning_chemicals_cut.jpg"
            alt="Umweltfreundliche Reinigungsmittel"
            width="800"
            height="900"
            className="border-solid rounded-xl border-white border-8 shadow-xl"
          />
        </figure>
        <div
          id="countup-component"
          className="grid grid-cols-2 text-colorSecondary gap-4 4k:-translate-y-32 4k:p-12 lg:-translate-y-12 lg:py-0 lg:px-2"
        >
          <article className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={100}
              additionalInformation="+"
              styles="text-xl  text-6xl font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Zufriedene Kunden</p>
          </article>
          <article className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={25}
              additionalInformation="+"
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Jahre Erfahrung</p>
          </article>
          <article className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={100}
              additionalInformation="%"
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Umweltbewusst</p>
          </article>
          {/* <div className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={450}
              styles="text-xl text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Certified Awards</p>
          </div> */}
        </div>
      </div>
      <div className="basis-1/2 w-full h-full">
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <h6 className="text-colorSecondary text-xl font-semibold pb-3">
            Über uns
          </h6>
          <h2 className="text-colorSecondary text-5xl font-bold pb-2 break-words break-all text-wrap">
            Reinigungsexperten seit 10 Jahren
          </h2>
          <p className="text-colorText">
            Wir sind ein Langenhagener Familienunternehmen, bei dem die Wünsche
            des Kunden immer fest im Blick stehen. Nach 25 Jahren
            Berufserfahrung im Bereich Gebäudereinigung haben wir unser
            Unternehmen im Jahr 2013 gegründet. Pünktlich, unkompliziert und
            schnell erreichbar, sind wir im Notfall zeitnah zur Stelle.
          </p>
        </div>
        <article className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <ImEarth className="mb-4 text-[4rem] text-colorPrimary" />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Für die Umwelt
          </h4>
          <p className="text-colorText pb-4">
            Unser Anspruch ist es, Ihrem Anspruch gerecht zu werden, mit
            ehrlichen, qualitätsorientierten und flexiblen Angeboten, natürlich
            verwenden wir dabei modernste und qualitätsgeprüfte
            Reinigungsmittel. Die von uns verwendeten Reinigungsprodukte tragen
            das Europäische Umweltzeichen.
          </p>
        </article>
        <article className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <FaClock className="mb-4 text-[4rem] text-colorPrimary" />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Perfektes Timing
          </h4>
          <p className="text-colorText pb-4">
            Für die Werterhaltung Ihres Gebäudes bieten wir Ihnen tägliche,
            wöchentliche, monatliche oder von Ihnen individuell gewählte
            Zeitabschnitte an.
          </p>
        </article>
        <article className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <GiMagicBroom className="mb-4 text-[4rem] text-colorPrimary" />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Umfassende Gebäudereinigung
          </h4>
          <p className="text-colorText pb-4">
            Egal, ob als einmalige Grundreinigung oder als regelmäßiger Service,
            unsere Expertise erstreckt sich auf die gründliche Pflege und
            Reinigung von Bürokomplexen, Gewerbeimmobilien sowie Treppenhäusern.
            Wir bieten umfassende Dienstleistungen, um eine makellose und
            professionelle Umgebung sicherzustellen.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
