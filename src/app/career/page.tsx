"use client";
import CardComponent from "@/components/ui/CardComponent";
import React from "react";

type Props = {};

export type Job = {
  title: string;
  image: string;
  description: string;
  url: string;
  altText: string;
};

const jobs: Job[] = [
  {
    title: "Wischmeister",
    image: "/testImage.jpg",
    description: "Testdescription",
    url: "www.google.de",
    altText: "Test",
  },
  {
    title: "Putzmeister",
    image: "/testImage.jpg",
    description: "Testdescription",
    url: "www.google.de",
    altText: "Test",
  },
  {
    title: "Reinigungsmeister",
    image: "/testImage.jpg",
    description: "Testdescription",
    url: "www.google.de",
    altText: "Test",
  },
];

const page = (props: Props) => {
  return (
    <div className="w-full h-full services__background">
      <div className="flex justify-center align-center flex-wrap px-[10vw] gap-8 py-16">
        {jobs.map((job, index) => {
          return (
            <div key={index} className="basis-1/3">
              <CardComponent
                title={job.title}
                image={job.image}
                description={job.description}
                url={job.url}
                altText={job.altText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
