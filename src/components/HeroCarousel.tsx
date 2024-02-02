import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HeroCarousel = (props: Props) => {
  return (
    <div className="relative">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="absolute top-0 bottom-0 w-full h-full bg-colorSecondary opacity-40 "></div>
      <div className="absolute top-0 bottom-0 w-full h-full flex items-center justify-center flex-col">
        <h2 className="text-7xl lg:text-5xl lg:text-center">
          Lemke Gebäudereinigung
        </h2>
        <div className="flex flex-row items-center justify-center mt-10 text-2xl lg:text-lg ">
          <h4 className="border-r pr-3">Erfahren</h4>
          <h4 className="border-r pr-3 pl-3">Freundlich</h4>
          <h4 className="pl-3">Engagiert</h4>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
