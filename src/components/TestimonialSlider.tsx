"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export interface Testimonial {
  img: { src: string; width: number; height: number };
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming = 7000;
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [autorotate, testimonials.length]);

  const selectTab = (index: number) => {
    setActive(index);
    setAutorotate(false);
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (index + dir + testimonials.length) % testimonials.length;
    selectTab(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <div className="relative h-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] max-w-full h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-colorSecondary/25 before:via-colorSecondary/5 before:via-25% before:to-colorSecondary/0 before:to-75% before:rounded-full before:-z-10"
          aria-hidden="true"
        >
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                appear
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <Image
                  className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                  src={testimonial.img.src}
                  width={testimonial.img.width}
                  height={testimonial.img.height}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-9">
        <div className="grid">
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              appear
              show={active === index}
              id={`testimonial-panel-${index}`}
              role="tabpanel"
              aria-hidden={active !== index}
              className="col-start-1 row-start-1"
              enter="transition ease-in-out duration-500 delay-200"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
            >
              <div className="text-2xl font-bold text-colorSecondary before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      <div
        role="tablist"
        aria-label="Kundenstimmen"
        className="flex flex-wrap justify-center -m-1.5"
      >
        {testimonials.map((testimonial, index) => {
          const isActive = active === index;
          return (
            <button
              key={index}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`testimonial-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              onClick={() => selectTab(index)}
              className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-colorPrimary transition-colors duration-150 ${
                isActive
                  ? "bg-colorSecondary text-white"
                  : "bg-colorSecondary/20 hover:bg-colorSecondary/50 text-colorSecondary"
              }`}
            >
              <span>{testimonial.name}</span>
              <span
                aria-hidden="true"
                className={`mx-1 ${isActive ? "text-white/70" : "text-colorSecondary/50"}`}
              >
                ·
              </span>
              <span>{testimonial.role}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
