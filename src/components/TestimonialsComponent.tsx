import Image from "next/image";
import React from "react";
import TestimonialSlider, { Testimonial } from "./TestimonialSlider";

type Props = {};

const testimonials: Testimonial[] = [
  {
    img: { src: "/service-picture.jpg", height: 30, width: 30 },
    quote: "Very cool! Nice price!",
    name: "The Serial Killer",
    role: "Superdude",
  },
  {
    img: { src: "/service-picture.jpg", height: 30, width: 30 },
    quote: "Nice service 10/10",
    name: "The Serial Killer",
    role: "Superdude",
  },
  {
    img: { src: "/service-picture.jpg", height: 30, width: 30 },
    quote: "Always buy the service there.",
    name: "The Serial Killer",
    role: "Superdude",
  },
];

const TestimonialsComponent = (props: Props) => {
  return (
    <section className="container mx-auto shadow-sm border-colorBorderLightGrey border-solid border-2 rounded-3xl flex mt-3 md:flex-col md:items-center md:justify-center md:px-4 md:border-none md:shadow-none">
      <div className="p-3">
        <Image
          src={"/service-picture.jpg"}
          width={400}
          height={400}
          alt="Testimonial Picture"
          style={{
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        ></Image>
      </div>
      <div className="text-colorPrimary flex justify-center items-center flex-col w-3/4 md:pt-24">
        <h4 className="text-xl font-semibold">Out Test</h4>
        <h2 className="text-6xl font-semibold mb-20">Our Client feedback</h2>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsComponent;
