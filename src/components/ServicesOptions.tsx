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
    <section
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
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <PiToiletLight className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Sanitäranlagen Reinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Hygiene wird bei uns nicht nur im Sanitärbereich großgeschrieben,
            aber hier besonders.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <PiToiletLight className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <PiChampagneDuotone className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Eventreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Sie feiern... ums Aufräumen kümmern wir uns.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <PiChampagneDuotone className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <PiTreeBold className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Aussenbereichreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Wir kehren auch vor Ihrer Tür.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <PiTreeBold className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <PiHammerThin className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Kleinreparaturen
          </h3>
          <p className="text-colorText pb-2 text-center">
            Unser Team ist bei Kleinreparaturen ganz groß.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <PiHammerThin className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <PiOfficeChair className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Büroreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Wischen, pflegen, erhalten – ganz nach Wunsch.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <PiOfficeChair className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
        <article className="group shadow-lg w-full max-w-[300px] h-[300px] basis-1/4 flex flex-col justify-center items-center p-8 rounded-3xl border-colorBorderLightGrey border-solid border-2 relative overflow-hidden">
          <BiSprayCan className="mb-4 text-[4rem] text-colorPrimary" />
          <h3 className="text-colorSecondary text-2xl font-semibold pb-2">
            Fensterreinigung
          </h3>
          <p className="text-colorText pb-2 text-center">
            Damit Sie den Durchblick behalten.
          </p>
          <div className="absolute bottom-0 right-0 transform translate-y-20 opacity-0 transition-all duration-200 group-hover:translate-y-12 group-hover:opacity-60">
            <BiSprayCan className="mb-4 text-[8rem] text-colorText" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServicesOptions;
