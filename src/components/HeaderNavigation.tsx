import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeaderNavigation = (props: Props) => {
  return (
    <header className="4k:px-[20vw] xl:px-0 mx-auto flex justify-between" role="banner">
      <Image
        src="/lemke-logo.jpg"
        width={110}
        height={110}
        alt="Logo der Lemke Gebäudereinigung"
        className="m-3"
      />
      <nav aria-label="Hauptnavigation">
        <ul className="list-none flex gap-6 text-colorSecondary font-bold lg:hidden">
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
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
