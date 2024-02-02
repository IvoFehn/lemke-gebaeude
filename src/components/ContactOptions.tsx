import { colorText } from "@/common/colors";
import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import ContactForm from "./ContactForm";

type Props = {};

const ContactOptions = (props: Props) => {
  return (
    <section className="4k:px-[20vw] xl:px-0 mx-auto mb-16">
      <div className="text-colorPrimary flex justify-center items-center flex-col pb-12 pt-16 lg:flex-col lg: text-center">
        <h4 className="text-2xl font-semibold text-colorSecondary">
          Beratungstermin vereinbaren
        </h4>
        <h2 className="text-6xl font-semibold lg:pt-4">
          Zögern Sie nicht uns zu kontaktieren
        </h2>
      </div>
      <div className="flex gap-6 lg:flex-col">
        <div className="basis-1/2 flex gap-8 flex-col justify-center items-end lg:items-center lg:gap-4">
          <a
            href="tel:05117900900"
            className="text-colorText border-colorBorderLightGrey border-solid border-2 flex p-5 rounded-2xl shadow-md w-3/4"
          >
            <div className="flex items-center w-full">
              <div>
                <FiPhoneCall
                  style={{
                    fontSize: "4rem",
                    color: colorText,
                    marginRight: "2rem",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-colorPrimary text-xl font-semibold">
                  Phone
                </span>
                <span>(+49)511 / 7 900 900</span>
              </div>
            </div>
          </a>
          <a
            href="mailto:info@lemke.com"
            className="text-colorText border-colorBorderLightGrey border-solid border-2 flex p-5 rounded-2xl shadow-md w-3/4"
          >
            <div className="flex items-center w-full">
              <div>
                <FiMail
                  style={{
                    fontSize: "4rem",
                    color: colorText,
                    marginRight: "2rem",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-colorPrimary text-xl font-semibold">
                  Mail
                </span>
                <span>service@lemke-gebäudereinigung.de</span>
              </div>
            </div>
          </a>
        </div>
        <div className="basis-1/2 w-full lg:flex lg:justify-center lg:items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
