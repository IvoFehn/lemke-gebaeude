import { colorPrimary, colorText } from "@/common/colors";
import React from "react";
import {
  PiToiletLight,
  PiHammerThin,
  PiTreeBold,
  PiChampagneDuotone,
  PiOfficeChair,
} from "react-icons/pi";
import { BiSprayCan } from "react-icons/bi";

type Props = {};

const ServicesOptions = (props: Props) => {
  return (
    <div
      className="w-full flex justify-center items-center text-colorText flex-col"
      id="services"
    >
      <h6 className="text-colorSecondary text-xl font-bold pb-4 text-center">
        Unsere beliebtesten Services
      </h6>
      <h2 className="text-colorSecondary text-6xl  lg:text-4xl font-bold pb-8 text-center">
        Reinigung auf jedem Gebiet
      </h2>
      <div className="overflow-hidden flex flex-wrap lg:flex-col gap-12 justify-center items-center pt-8 pb-32 ">
        <div className="shadow-lg w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 outer-card-div">
          <PiToiletLight
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Sanitäranlagen Reinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Hygiene wird bei uns nicht nur im Sanitärbereich großgeschrieben,
            aber hier besonders.
          </p>

          <div className="inner-card-div">
            <PiToiletLight
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
            Eventreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Sie feiern... ums Aufräumen kümmern wir uns.
          </p>

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
          <PiTreeBold
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Aussenbereichreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Wir kehren auch vor Ihrer Tür.
          </p>

          <div className="inner-card-div">
            <PiTreeBold
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
          <PiHammerThin
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Kleinreparaturen
          </h3>
          <p className="text-colorText pb-2 text-center">
            Unser Team ist bei Kleinreparaturen ganz groß.
          </p>

          <div className="inner-card-div">
            <PiHammerThin
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
            Büroreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Wischen, pflegen, erhalten – ganz nach Wunsch.
          </p>

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
          <BiSprayCan
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: colorPrimary,
            }}
          />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Fensterreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Damit Sie den Durchblick behalten.
          </p>

          <div className="inner-card-div">
            <BiSprayCan
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
