import { Job } from "@/app/career/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardComponent = (props: Job) => {
  return (
    <div className="flex flex-wrap flex-col text-colorAccent shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <Image
          src={`${props.image}`}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "auto" }} // optional
          alt={props.altText}
          className="rounded-t-2xl"
        />
      </div>
      <hr></hr>
      <h2 className="text-5xl p-4">{props.title}</h2>
      <p className="text-xl p-4">{props.description}</p>
      <Link href="mailto:info@lemke.de" className="p-4">
        <button className="border-2 rounded-2xl p-2 w-full bg-colorSecondary text-white">
          Hier bewerben!
        </button>
      </Link>
    </div>
  );
};

export default CardComponent;
