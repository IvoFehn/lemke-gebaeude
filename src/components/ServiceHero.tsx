import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ServicesOptions from "./ServicesOptions";
import Link from "next/link";

type Props = {};

const ServiceHero = (props: Props) => {
  return (
    <div className="bg-colorBackgroundLightGrey pb-">
      <div className="mb-16 bg-[url('/scroll-bg.jpg')] h-[600px] w-full rounded-b-[50%] lg:rounded-b-xl bg-fixed bg-no-repeat bg-center bg-cover relative">
        <div className="bg-colorPrimary opacity-60 h-[600px] w-full rounded-b-[50%] lg:rounded-b-xl"></div>
        <div className="w-full h-full text-white absolute top-0 left-0 z-10 flex items-center pt-32 flex-col lg:px-4 lg:text-center">
          <h2 className="text-4xl pb-8 font-bold">Karriere</h2>
          <p className="pb-8 text-base">
            Nutze unser Karriereportal und entdecke unsere offenen Stellen.
          </p>
          <Link href="/career">
            <button className="bg-colorPrimary p-5 rounded-xl flex justify-center items-center uppercase hover:brightness-125 transition-all duration-300">
              <span className="pr-2">Zeige die Vakanzen</span>
              <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center gap-4 text-colorText bg-colorSecondary max-w-fit p-16 rounded-xl -translate-y-24 lg:flex-col">
          <h3 className="text-2xl font-bold pr-8 text-white ">
            Online <br></br> Appointment
          </h3>
          <input className="rounded-xl p-3 w-full" placeholder="Fullname" />
          <input className="rounded-xl p-3 w-full" placeholder="Phone No." />
          <select
            name="pets"
            placeholder="Service Name"
            className="rounded-xl p-3 w-full"
          >
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <button className="bg-colorPrimary text-white p-5 rounded-xl flex justify-center items-center uppercase">
            <span className="pr-2">Submit now</span>
            <BsArrowRight />
          </button>
        </div>
      </div> */}
      <div>
        <ServicesOptions />
      </div>
    </div>
  );
};

export default ServiceHero;
