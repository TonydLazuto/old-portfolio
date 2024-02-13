import { Tooltip } from "@mui/material";
import { useState } from "react";
import Fade from '@mui/material/Fade';

export interface StackItemProps {
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
    setStackItemClass("animate-tooltipEnter");
  };
  const handleStackHoverLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setStackItemClass("animate-tooltipLeave");
  };
  return (
    <Tooltip
      onMouseEnter={handleStackHoverEnter}
      onMouseLeave={handleStackHoverLeave}
      className="mb-4 md:mb-6 mx-1"
      title={alt}
      placement="top-end"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 200 }}
      arrow
    >
      <a href={link}>
      <img
        src={src}
        alt={alt}
        className={`w-12 h-12 md:w-16 md:h-16 md:mx-2 mx-1 ${stackItemClass}`}
      />
      </a>
    </Tooltip>
  );
}

export default StackItem
