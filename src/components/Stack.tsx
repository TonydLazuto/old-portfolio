import frontEndStack from "../data/stack/frontendStack";
import backEndStack from "../data/stack/backendStack";
import moreStack from "../data/stack/moreStack";
import useObserver from "../hooks/useObserver";
import StackSection from "./micro-components/StackSection";
import { IsMobile } from "../App";

const Stack = ({ isMobile }: IsMobile) => {
  const obsRef = useObserver({ isMobile });

  return (
    <div
      id="stack"
      className="w-screen
        h-max md:min-h-full
        md:mt-20 mb-10
				pt-20 md:py-4"
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
        <StackSection
          section="Frontend"
          stacks={frontEndStack}
          gradientColor="from-sky-500 to-slate-400"
          isMobile={isMobile}
        />
        <StackSection
          section="Backend"
          stacks={backEndStack}
          gradientColor="from-teal-700 to-slate-400"
          isMobile={isMobile}
        />
        <StackSection
          section="More stack"
          stacks={moreStack}
          gradientColor="from-violet-700 to-slate-400"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default Stack;
