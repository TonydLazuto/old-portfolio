import { useRef, useState } from "react";
import stacks from "../data/stack";
import useObserver from "../hooks/useObserver";
import StackItem from "./micro-components/StackItem";

const Stack = () => {
  const obsRef = useObserver();

  return (
    <div
      id="stack"
      className="flex flex-col items-center
				justify-center w-screen
				min-h-full md:my-40
				py-40 md:py-4"
    >
      <div
        ref={obsRef}
        className="flex justify-evenly items-center flex-wrap
				items-center w-3/5"
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
