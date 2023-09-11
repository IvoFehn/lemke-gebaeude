import React from "react";
import Image from "next/image";

type Props = {};

const HeaderNavigation = (props: Props) => {
  return (
    <div className="4k:px-[20vw] xl:px-0 mx-auto flex justify-between">
      <Image
        src="/lemke-logo.jpg"
        width={110}
        height={110}
        alt="Lemke Gebäuidereinigung Logo"
        className="m-3"
      />
      <ul className="list-none flex gap-6 text-colorSecondary font-bold lg:hidden">
        <a href="#" className="flex items-center gap-2">
          <li>Startseite</li>
        </a>
        <a href="#services" className="flex items-center gap-2">
          <li>Leistungen</li>
        </a>
        <a href="#about" className="flex items-center gap-2">
          <li>Über Uns</li>
        </a>
      </ul>
    </div>
  );
};

export default HeaderNavigation;
