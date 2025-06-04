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
        <address className="basis-1/3 flex gap-4 flex-col not-italic">
          <Image
            src={"/lemke-logo.jpg"}
            width={250}
            height={250}
            alt="Logo der Lemke Gebäudereinigung"
            className="rounded-sm"
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
        </address>
        <nav aria-label="Footer" className="basis-1/3 flex gap-4 flex-col">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Quick Links</h4>
          <ul className=" flex gap-2 flex-col">
            <li>
              <Link href="/#about">Über uns</Link>
            </li>
            <li>
              <Link href="/#contact">Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/career">Karriere</Link>
            </li>
          </ul>
        </nav>
        <div className="basis-1/3">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Partnerschaften</h4>
          <ul className=" flex gap-2 flex-col">
            <li className="flex items-center gap-2">
              <Image
                src="/dataline-logo.png"
                width={45}
                height={45}
                alt="Dataline Logo"
                className="rounded-sm"
              />
              <a
                href="https://dataline.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-colorText"
              >
                Dataline
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="4k:px-[20vw] xl:px-0 mx-auto flex items-center justify-end rounded-md">
        <a
          className="flex p-5 underline hover:text-colorText"
          href="https://github.com/IvoFehn"
        >
          Made <BsFillHeartFill className="mx-1 text-red-600" /> by Ivo Fehn
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
