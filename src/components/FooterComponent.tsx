import Image from "next/image";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <footer className=" bg-colorSecondary">
      <div className="4k:px-[20vw] xl:px-0 flex text-white pt-32 pb-16 gap-8 lg:flex-col lg:px-16 lg:justify-center">
        <div className="basis-1/3 flex gap-4 flex-col">
          <Image
            src={"/lemke-logo.jpg"}
            width={250}
            height={250}
            alt="Lemke Gebäudereinigung Logo"
            style={{ borderRadius: "2%" }}
          />
          <a
            href="mailto:service@lemke-gebäudereinigung.de"
            className="flex items-center gap-2"
          >
            <FiMail />
            service@lemke-gebäudereinigung.de
          </a>
          <a href="tel:05117900900" className="flex items-center gap-2">
            <FiPhone /> <span>0511 / 7-900-900</span>
          </a>
        </div>
        <div className="basis-1/3 flex gap-4 flex-col">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Quick Links</h4>
          <ul className=" flex gap-2 flex-col">
            <li>Über uns</li>
            <li>Kontakt</li>
            <li>Unser Service</li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/3">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Unser Service</h4>
          <ul className=" flex gap-2 flex-col">
            <li>Sanitäranlagen </li>
            <li>Büro</li>
            <li>Aussenbereich</li>
            <li>Kleinreparaturen</li>
            <li>Fenster </li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div className="4k:px-[20vw] xl:px-0 mx-auto flex items-center justify-end rounded-md">
        <a
          className="flex p-5 underline hover:text-colorText"
          href="https://github.com/IvoFehn"
        >
          Made <BsFillHeartFill className="mx-1" style={{ color: "red" }} /> by{" "}
          Ivo Fehn
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
