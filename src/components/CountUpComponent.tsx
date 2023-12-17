import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

type Props = {
  countUpTo: number;
  additionalInformation?: string;
  styles?: string;
};

const CountUpComponent = (props: Props) => {
  const countupRef = useRef<HTMLHeadingElement>(null);
  let countUpAnim: any;

  useEffect(() => {
    initCountUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function initCountUp() {
    countUpAnim = new CountUp(countupRef.current!, props.countUpTo, {
      startVal: 0,
      duration: 3,
      enableScrollSpy: true,
    });
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <div className="flex">
      <h4 ref={countupRef} className={props.styles}>
        0
      </h4>
      <h4> {props.additionalInformation}</h4>
    </div>
  );
};

export default CountUpComponent;
