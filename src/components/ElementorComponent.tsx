import {
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

import React from "react";

type Props = {};

const ElementorComponent = (props: Props) => {
  return (
    <div className="container mx-auto -translate-y-12">
      <div className="bottom-0 w-full flex sm:flex-col sm:px-4">
        <div className="w-1/3 h-full flex flex-col justify-center bg-colorElementor rounded-l-2xl p-9 sm:w-full sm:rounded-t-2xl sm:rounded-b-none ">
          <AiOutlineClockCircle
            style={{ fontSize: "4rem", marginBottom: "1rem" }}
          />
          <h4 className="text-2xl mb-2">Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center bg-colorSecondary p-9 sm:w-full  sm:rounded-none">
          <AiOutlineShoppingCart
            style={{ fontSize: "4rem", marginBottom: "1rem" }}
          />
          <h4 className="text-2xl mb-2">Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center bg-colorPrimary rounded-r-2xl p-9 sm:w-full sm:rounded-b-2xl sm:rounded-t-none">
          <AiOutlineStar style={{ fontSize: "4rem", marginBottom: "1rem" }} />
          <h4 className="text-2xl mb-2">Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElementorComponent;
