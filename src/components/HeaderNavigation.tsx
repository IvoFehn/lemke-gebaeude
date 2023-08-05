import React from "react";
import Image from "next/image";

type Props = {};

const HeaderNavigation = (props: Props) => {
  return (
    <div className="container mx-auto flex justify-between">
      <Image
        src="/lemke-logo.jpg"
        width={110}
        height={110}
        alt="Lemke Gebäuidereinigung Logo"
        className="m-3"
      />
      <ul className="list-none flex gap-6 text-colorSecondary font-bold ">
        <li className="flex items-center gap-2">Startseite</li>
        <li className="flex items-center gap-2">Leistungen</li>
        <li className="flex items-center gap-2">Über Uns</li>
      </ul>
    </div>
  );
};

export default HeaderNavigation;
