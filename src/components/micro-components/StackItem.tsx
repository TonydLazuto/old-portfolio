import { useState } from "react";

interface StackItemProps {
    src: string;
    link: string;
    alt: string;
}

const StackItem = (stackItemProps: StackItemProps) => {
    const [stackItemClass, setStackItemClass] = useState("");
    const { src, link, alt } = stackItemProps;

  const handleStackHoverEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setStackItemClass("animate-stackItemHoverEnter");
  };
  const handleStackHoverLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setStackItemClass("animate-stackItemHoverLeave");
  };
  return (
    <div
      onMouseEnter={handleStackHoverEnter}
      onMouseLeave={handleStackHoverLeave}
      className="mb-4 md:mb-6 mx-1"
    >
      <a href={link}>
      <img
        src={src}
        alt={alt}
        className={`w-12 h-12 md:w-20 md:h-20 md:mx-2 mx-1 ${stackItemClass}`}
      />
      </a>
    </div>
  );
}

export default StackItem
