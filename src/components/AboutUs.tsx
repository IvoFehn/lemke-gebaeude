import React, { useState } from "react";
import Image from "next/image";
import CountUpComponent from "./CountUpComponent";
import { GiMagicBroom, GiVacuumCleaner } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { colorPrimary } from "@/common/colors";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="mt-5  container mx-auto flex sm:flex-col">
      <div className="basis-1/2 w-full">
        <div className="flex items-center justify-center sm:px-4">
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
          className="grid grid-cols-2 text-colorSecondary px-2 gap-4 -translate-y-12"
        >
          <div className="flex flex-col items-center justify-center sm:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={560}
              styles="text-xl  text-6xl font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center justify-center sm:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={850}
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Dedicated Cleaner</p>
          </div>
          <div className="flex flex-col items-center justify-center sm:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={920}
              styles="text-xl  text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Satisfied Customer</p>
          </div>
          <div className="flex flex-col items-center justify-center sm:text-center bg-white shadow-lg rounded-xl p-4">
            <CountUpComponent
              countUpTo={450}
              styles="text-xl text-6xl block font-bold text-colorText pb-2"
            />
            <p className="font-semibold text-lg">Certified Awards</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 w-full h-full">
        <div className="sm:flex sm:justify-center sm:items-center sm:flex-col sm:px-4 sm:text-center">
          <h6 className="text-colorSecondary text-xl font-semibold pb-3">
            About us
          </h6>
          <h2 className="text-colorSecondary text-6xl font-bold pb-2">
            Our Success Cleaning Up Your Mess
          </h2>
          <p className="text-colorText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 sm:flex sm:justify-center sm:items-center sm:flex-col sm:px-4 sm:text-center">
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
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 sm:flex sm:justify-center sm:items-center sm:flex-col sm:px-4 sm:text-center">
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
        <div className="border-b-2 border-dotted pb-2 border-colorText pt-6 sm:flex sm:justify-center sm:items-center sm:flex-col sm:px-4 sm:text-center">
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
