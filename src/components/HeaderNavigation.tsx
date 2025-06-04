import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeaderNavigation = (props: Props) => {
  return (
    <header
      className="4k:px-[20vw] xl:px-0 mx-auto flex justify-between items-center relative"
      role="banner"
    >
      <Image
        src="/lemke-logo.jpg"
        width={110}
        height={110}
        alt="Logo der Lemke Gebäudereinigung"
        className="m-3"
      />
      <nav aria-label="Hauptnavigation">
        <ul
          className="list-none flex items-center gap-6 text-colorSecondary font-bold lg:flex-col lg:absolute lg:right-0 lg:top-full lg:bg-white lg:p-4 lg:shadow-md lg:w-48"
        >
          <li>
            <Link href="/#" className="flex items-center gap-2">
              Startseite
            </Link>
          </li>
          <li>
            <Link href="/#about" className="flex items-center gap-2">
              Über Uns
            </Link>
          </li>
          <li>
            <Link href="/#services" className="flex items-center gap-2">
              Leistungen
            </Link>
          </li>
          <li>
            <Link href="/career" className="flex items-center gap-2">
              Karriere
            </Link>
          </li>
          <li>
            <Link href="/impressum" className="flex items-center gap-2">
              Impressum
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
