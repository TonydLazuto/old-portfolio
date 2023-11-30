import { useState } from "react";
import useObserver from "../../hooks/useObserver";
import StackItem, { StackItemProps } from "./StackItem";
import { useMobile } from "../../hooks/useMobile";

interface StackSectionProps {
    section: string;
    gradientColor: string;
    stacks: StackItemProps[];
}

const StackSection = (props: StackSectionProps) => {
    const { section, stacks, gradientColor } = props;
    const { isMobile } = useMobile();
    const obsRef = useObserver({ isMobile });

    return (
    <div className="flex flex-col
      justify-between md:justify-start
      items-center
      shadow-md
      w-4/5 md:w-96
      mb-12 md:mb-20
      md:px-4
      rounded-3xl">
       <h2
          className={`
          text-2xl md:text-3xl
          font-semibold text-center md:text-left
          font-display
          mb-6 md:mb-10
          text-transparent bg-clip-text
          bg-gradient-to-l ${gradientColor}
          border-b-2 border-slate-100 px-2`}
        >{section}</h2>
      <div
        ref={obsRef}
        className="flex justify-evenly items-center flex-wrap
				items-center w-4/5 md:w-full"
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
}

export default StackSection
