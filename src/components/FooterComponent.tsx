import Image from "next/image";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsFillHeartFill } from "react-icons/bs";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <footer className=" bg-colorSecondary">
      <div className="mx-auto container flex text-white pt-32 pb-16 gap-8 md:flex-col md:items-center md:justify-center">
        <div className="basis-1/3 flex gap-4 flex-col">
          <Image
            src={"/lemke-logo.jpg"}
            width={250}
            height={250}
            alt="Lemke Gebäudereinigung Logo"
            style={{ borderRadius: "2%" }}
          />
          <a href="mailto:test@test.de" className="flex items-center gap-2">
            <FiMail />
            test@test.de
          </a>
          <a href="tel:1234324523" className="flex items-center gap-2">
            <FiPhone /> <span>647823784328</span>
          </a>
          <a
            href="geo:37.7749,-122.4194?q=37.7749,-122.4194(San Francisco)"
            className="flex items-center gap-2"
          >
            <CiLocationOn />
            <span> Anfahrt</span>
          </a>
        </div>
        <div className="basis-1/3 flex gap-4 flex-col">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Quick Links</h4>
          <ul className=" flex gap-2 flex-col">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="basis-1/3">
          <h4 className="border-b-2 mb-4 pb-2 text-xl">Our Service</h4>
          <ul className=" flex gap-2 flex-col">
            <li>Carpet Cleaning</li>
            <li>House Cleaning</li>
            <li>Window Cleaning</li>
            <li>Kitchen Cleaning</li>
            <li>Park Cleaning</li>
            <li>Furniture Cleaning</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-end rounded-md">
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
