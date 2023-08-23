import React from "react";
import {
  AiFillPhone,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";

type Props = {};

const ContactInfo = (props: Props) => {
  return (
    <div className=" bg-colorPrimary min-h-min text-sm container md:hidden">
      <ul className="list-none p-2 items-center gap-2 container mx-auto flex justify-end ">
        <li className="flex items-center gap-2">
          <AiFillPhone color="white" />
          <a href="tel:123-456-7890" className="no-underline">
            <span>123-456-7890</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineMail color="white" />
          <a href="mailto:abc@example.com">
            <span className="">abc@example.com</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClockCircle color="white" />
          <span>Mon - Fri: 9:00 - 18:30</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
