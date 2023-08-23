import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HeroCarousel = (props: Props) => {
  return (
    <div className="relative">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="absolute top-0 bottom-0 w-full h-full bg-colorSecondary opacity-40 "></div>
      <div className="absolute top-0 bottom-0 w-full h-full flex items-center justify-center">
        <h2 className="text-7xl lg:text-3xl lg:text-center">
          Reliable Cleaning Agency With Best Equipment
        </h2>
      </div>
    </div>
  );
};

export default HeroCarousel;
