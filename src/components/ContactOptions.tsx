import { colorText } from "@/common/colors";
import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import ContactForm from "./ContactForm";

type Props = {};

const ContactOptions = (props: Props) => {
  return (
    <section className="container mx-auto mb-16">
      <div className="text-colorPrimary flex justify-center items-center flex-col pb-12 pt-16">
        <h4 className="text-2xl font-semibold text-colorSecondary">
          Get Free Estimate
        </h4>
        <h2 className="text-6xl font-semibold">Don’t Hesitate To Contact</h2>
      </div>
      <div className="flex gap-6 ">
        <div className="basis-1/2 flex gap-8 flex-col justify-center items-end">
          <a
            href="tel:0172747237"
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
                <span>(+49)176 / 42 98 32 42</span>
              </div>
            </div>
          </a>
          <a
            href="tel:0172747237"
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
                <span>info@lemke.com</span>
              </div>
            </div>
          </a>
        </div>
        <div className="basis-1/2 w-full ">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
