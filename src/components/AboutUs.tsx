import React, { useState } from "react";
import Image from "next/image";
import CountUpComponent from "./CountUpComponent";
import { GiMagicBroom, GiVacuumCleaner } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { colorPrimary } from "@/common/colors";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="mt-5 4k:px-[20vw] xl:px-0 mx-auto flex lg:flex-col gap-12">
      <div className="basis-1/2 w-full">
        <div className="flex items-center justify-center lg:px-4">
          <Image
            src="/service-picture.jpg"
            alt="Some photo"
            width="600"
            height="900"
            className="border-solid rounded-xl border-white border-8 shadow-xl"
          ></Image>
        </div>
        <div
          id="countup-component"
          className="grid grid-cols-2 text-colorSecondary gap-4 4k:-translate-y-32 4k:p-12 lg:-translate-y-12 lg:py-0 lg:px-2"
        >
          <div className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={560}
              styles="text-xl  text-6xl font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={850}
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Dedicated Cleaner</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={920}
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Satisfied Customer</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={450}
              styles="text-xl text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Certified Awards</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 w-full h-full">
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <h6 className="text-colorSecondary text-xl font-semibold pb-3">
            Über uns
          </h6>
          <h2 className="text-colorSecondary text-6xl font-bold pb-2">
            Reinigungsexperten seit 10 Jahren
          </h2>
          <p className="text-colorText">
            Wir sind ein Langenhagener Familienunternehmen, bei dem die Wünsche
            des Kunden immer fest im Blick stehen. Nach 25 Jahren
            Berufserfahrung im Bereich Gebäudereinigung haben wir unser
            Unternehmen im Jahr 2013 gegründet. Pünktlich, unkompliziert und
            schnell erreichbar, sind wir im Notfall zeitnah zur Stelle. Unser
            Anspruch ist es, Ihrem Anspruch gerecht zu werden, mit ehrlichen,
            qualitätsorientierten und flexiblen Angeboten, natürlich verwenden
            wir dabei modernste und qualitätsgeprüfte Reinigungsmittel. Die von
            uns verwendeten Reinigungsprodukte tragen das Europäische
            Umweltzeichen.
          </p>
        </div>
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <GiVacuumCleaner
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Residential Cleaning
          </h4>
          <p className="text-colorText pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <GiMagicBroom
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Commercial Cleaning
          </h4>
          <p className="text-colorText pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 lg:flex lg:justify-center lg:items-center lg:flex-col lg:px-4 lg:text-center">
          <LiaIndustrySolid
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h4 className="text-colorSecondary text-xl font-semibold pb-2">
            Industrail Cleaning
          </h4>
          <p className="text-colorText pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
