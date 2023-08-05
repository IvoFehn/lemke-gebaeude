import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const ServiceHero = (props: Props) => {
  return (
    <div className="h-[700px]">
      <div className="bg-[url('/scroll-bg.jpg')] h-[600px] w-full rounded-b-[50%] bg-fixed bg-no-repeat bg-center bg-cover relative">
        <div className="bg-colorPrimary opacity-60 h-[600px] w-full rounded-b-[50%] "></div>
        <div className="w-full h-full text-white absolute top-0 left-0 z-10 flex items-center pt-32 flex-col">
          <h2 className="text-4xl pb-8 font-bold">
            Book Our Laundry Services & Get 30% Discount
          </h2>
          <p className="pb-8 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="bg-colorPrimary p-5 rounded-xl flex justify-center items-center uppercase">
            <span className="pr-2">Discover more</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
