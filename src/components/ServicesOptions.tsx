import { colorPrimary, colorText } from "@/common/colors";
import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { GiFloorPolisher } from "react-icons/gi";
import { LiaBrushSolid } from "react-icons/lia";
import {
  PiChampagneDuotone,
  PiOfficeChair,
  PiRoadHorizonBold,
} from "react-icons/pi";

type Props = {};

const ServicesOptions = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center text-colorText flex-col">
      <h6 className="text-colorSecondary text-xl font-bold pb-4 text-center">
        Our Popular Services
      </h6>
      <h2 className="text-colorSecondary text-6xl  sm:text-4xl font-bold pb-8 text-center">
        Our Most Popular Cleaning Services
      </h2>
      <div className="overflow-hidden flex flex-wrap sm:flex-col gap-12 justify-center items-center pt-8 pb-32 ">
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <LiaBrushSolid
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Commercial Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <LiaBrushSolid
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <PiChampagneDuotone
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Kitchen Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <PiChampagneDuotone
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <BsHouseDoor
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            House Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <BsHouseDoor
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <GiFloorPolisher
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Carpet Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <GiFloorPolisher
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <PiOfficeChair
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Office Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <PiOfficeChair
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <PiRoadHorizonBold
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Road Cleaning
          </h3>
          <p className="text-colorText pb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="text-colorPrimary hover:text-colorSecondary">
            Learn more
          </a>
          <div className="inner-card-div">
            <PiRoadHorizonBold
              style={{
                fontSize: "8rem",
                marginBottom: "1rem",
                color: colorText,
                opacity: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOptions;
