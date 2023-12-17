import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/#" className="flex items-center gap-2">
          <li>Startseite</li>
        </Link>
        <Link href="/#about" className="flex items-center gap-2">
          <li>Über Uns</li>
        </Link>
        <Link href="/#services" className="flex items-center gap-2">
          <li>Leistungen</li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderNavigation;
