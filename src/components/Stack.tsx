import { useRef, useState } from "react";
import frontEndStack from "../data/stack/frontendStack";
import backEndStack from "../data/stack/backendStack";
import moreStack from "../data/stack/moreStack";
import useObserver from "../hooks/useObserver";
import StackSection from "./micro-components/StackSection";

const Stack = () => {
  const obsRef = useObserver();

  return (
    <div
      id="stack"
      className="w-screen
        min-h-screen md:min-h-full
        md:my-40
				py-40 md:py-4"
    >
      <h1
	  	  ref={obsRef}
        className="h-16 w-2/3 md:w-fit
          m-auto md:m-0 md:ml-36 md:mb-12
          mb-20 md:px-8
          pt-2
					text-4xl md:text-5xl
					text-center md:text-left
					font-semibold
					bg-shade2
					rounded-md
          shadow-xl md:shadow-lg
          font-display"
      >
        Stack
      </h1>
      <div
        className="flex flex-col md:flex-row
          justify-between md:justify-evenly md:flex-wrap
          items-center md:items-stretch
          w-4/5 m-auto"
      >
        <StackSection section="Frontend" stacks={frontEndStack} gradientColor='from-sky-500 to-slate-400' />
        <StackSection section="Backend" stacks={backEndStack} gradientColor='from-teal-700 to-slate-400' />
        <StackSection section="More stack" stacks={moreStack} gradientColor='from-violet-700 to-slate-400' />
      </div>
    </div>

  );
};

export default Stack;
