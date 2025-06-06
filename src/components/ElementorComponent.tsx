import { AiOutlineClockCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { FaMap } from "react-icons/fa";

import React from "react";

type Props = {};

const ElementorComponent = (props: Props) => {
  return (
    <section className="4k:px-[20vw] xl:px-0 mx-auto -translate-y-12">
      <div className="bottom-0 w-full flex lg:flex-col lg:px-4">
        <article className="w-1/3 h-full flex flex-col justify-center bg-colorElementor rounded-l-2xl p-9 lg:w-full lg:rounded-t-2xl lg:rounded-b-none ">
          <AiOutlineClockCircle className="mb-4 text-[4rem]" />
          <h4 className="text-2xl mb-2">Kundennähe</h4>
          <p>
            <b>Direkter Kontak</b> und schnelle Kommunikation bei jedem Problem.
          </p>
        </article>
        <article className="w-1/3 h-full flex flex-col justify-center bg-colorSecondary p-9 lg:w-full  lg:rounded-none">
          <AiOutlineShoppingCart className="mb-4 text-[4rem]" />
          <h4 className="text-2xl mb-2">Faire Preise</h4>
          <p>
            <q>
              Fairer Lohn für <b>faire Arbeit</b>
            </q>
            . Nicht weniger haben Sie bei uns zu erwarten.
          </p>
        </article>
        <article className="w-1/3 h-full flex flex-col justify-center bg-colorPrimary rounded-r-2xl p-9 lg:w-full lg:rounded-b-2xl lg:rounded-t-none">
          <FaMap className="mb-4 text-[4rem]" />
          <h4 className="text-2xl mb-2">Hannover und Umland</h4>
          <p>
            Tätig werden wirfür Sie im Raum Hannover und im Umkreis von{" "}
            <b>10km</b>.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ElementorComponent;
