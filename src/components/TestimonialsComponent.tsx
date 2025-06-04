import Image from "next/image";
import React from "react";
import TestimonialSlider, { Testimonial } from "./TestimonialSlider";

type Props = {};

const testimonials: Testimonial[] = [
  {
    img: { src: "/profilePicture.png", height: 30, width: 30 },
    quote: "Super reinigungsfirma tolles Team!!",
    name: "Andreas Jung",
    role: "Kleinunternehmer",
  },
  {
    img: { src: "/profilePicture.png", height: 30, width: 30 },
    quote: "Top-Service durch nette Mitarbeiter.",
    name: "Torsten Grunewald",
    role: "Botaniker",
  },
  {
    img: { src: "/profilePicture.png", height: 30, width: 30 },
    quote: "Mehr als sauber geht nicht und freundlich noch dazu. Danke.",
    name: "Katharina Fenstermacher",
    role: "Management",
  },
];

const TestimonialsComponent = (props: Props) => {
  return (
    <section className="4k:px-[20vw] xl:px-0 shadow-sm border-colorBorderLightGrey border-solid border-2 rounded-3xl flex mt-3 lg:flex-col lg:items-center lg:justify-center lg:px-4 lg:border-none lg:shadow-none">
      <div className="p-3">
        <Image
          src={"/fancy_room_cut.jpg"}
          width={800}
          height={400}
          alt="Ein luxuriös gereinigter Raum"
          className="testimonial-image"
        ></Image>
      </div>
      <div className="text-colorPrimary flex justify-center items-center flex-col w-3/4 lg:pt-24 lg:text-center">
        <h4 className="text-xl font-semibold">Tests</h4>
        <h2 className="text-6xl font-semibold mb-20">Unser Kunden-Feedback</h2>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsComponent;
