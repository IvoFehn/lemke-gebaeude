import React from "react";
import {
  AiFillPhone,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";

type Props = {};

const ContactInfo = (props: Props) => {
  return (
    <address className=" bg-colorPrimary min-h-min text-sm lg:hidden 4k:px-[20vw] xl:px-0 mx-auto not-italic">
      <ul className="list-none py-2 items-center gap-2 flex justify-end">
        <li className="flex items-center gap-2">
          <AiFillPhone color="white" aria-hidden="true" />
          <a href="tel:05117900900" className="no-underline">
            <span>0511 / 7-900-900</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineMail color="white" aria-hidden="true" />
          <a href="mailto:service@lemke-gebäudereinigung.de">
            <span>service@lemke-gebäudereinigung.de</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClockCircle color="white" aria-hidden="true" />
          <span>Mo - Fr: 6:00 - 18:00</span>
        </li>
      </ul>
    </address>
  );
};

export default ContactInfo;
