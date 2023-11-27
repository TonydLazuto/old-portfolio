import { useRef, useState } from "react";
import stacks from "../data/stack";
import useObserver from "../hooks/useObserver";
import StackItem from "./micro-components/StackItem";

const Stack = () => {
  const obsRef = useObserver();

  return (
    <div
      id="stack"
      className="w-screen
        min-h-full md:my-40
				py-40 md:py-4"
    >
      <h1
	  	  ref={obsRef}
        className="h-16 w-2/3 md:w-48
          m-auto md:m-0 md:ml-36 md:mb-12
          mb-20 md:pl-8
          pt-2
					text-3xl md:text-5xl
					text-center md:text-left
					font-semibold
					bg-shade2
					rounded-md
          shadow-xl md:shadow-sm
          font-display"
      >
        Stack
      </h1>
      <div
        ref={obsRef}
        className="w-3/5 m-auto flex justify-evenly items-center flex-wrap
				items-center"
      >
        {stacks.map((stack, index) => (
          <StackItem
            key={index}
            src={stack.src}
            link={stack.link}
            alt={stack.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
