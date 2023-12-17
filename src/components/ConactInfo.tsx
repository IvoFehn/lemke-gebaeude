import React from "react";
import {
  AiFillPhone,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";

type Props = {};

const ContactInfo = (props: Props) => {
  return (
    <div className=" bg-colorPrimary min-h-min text-sm lg:hidden 4k:px-[20vw] xl:px-0 mx-auto">
      <ul className="list-none py-2 items-center gap-2 flex justify-end">
        <li className="flex items-center gap-2">
          <AiFillPhone color="white" />
          <a href="tel:05117900900" className="no-underline">
            <span>0511 / 7-900-900</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineMail color="white" />
          <a href="mailto:info@lemke.de">
            <span className="">info@lemke.de</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClockCircle color="white" />
          <span>Mo - Fr: 6:00 - 18:00</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
