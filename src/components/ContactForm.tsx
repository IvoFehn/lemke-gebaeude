import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="bg-colorSecondary flex flex-col rounded-2xl p-8 w-3/4">
      <fieldset className="flex gap-2 flex-col justify-center items-center">
        <legend className="text-xl hidden">Contact us</legend>
        <input
          type="text"
          name="size"
          id="size_1"
          placeholder="Fullname"
          className="text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full"
        />
        <input
          type="number"
          name="size"
          id="size_2"
          placeholder="Phone No."
          className="text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full"
        />
        <input
          type="text"
          name="size"
          id="size_3"
          placeholder="Email"
          className="text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full"
        />
        <textarea
          id="story"
          name="story"
          rows={5}
          placeholder="Message"
          className="text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full"
        ></textarea>
        <input
          type="submit"
          value={`Send Message`.toUpperCase()}
          className="bg-colorPrimary w-64 p-3 mt-3 rounded-2xl cursor-pointer hover:bg-white hover:text-colorPrimary font-semibold transition duration-500 ease-in-out"
        ></input>
      </fieldset>
    </form>
  );
};

export default ContactForm;
