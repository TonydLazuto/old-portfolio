import { useEffect, useState } from "react";
import HeaderIntro from "./micro-components/HeaderIntro";
import LazyImg from "./micro-components/LazyImg";


interface Header {
  obsRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
}

const Header = ({ obsRef, isMobile }: Header) => {
  const animatePicturePop = isMobile ? "" : "animate-picturePop";

  return (
    <div
      ref={obsRef}
      id="header"
      className="bg-shade0
        w-screen
        h-200 md:h-auto
        md:min-h-[calc(100vh_-_2rem)]
        flex justify-center items-center"
    >
      <div
        className="h-full
        md:w-11/12
        flex flex-col md:flex-row
        justify-center items-center
        text-center md:text-left
        gap-8 md:gap-12"
      >
        <HeaderIntro isMobile={isMobile} />
        <div
          className={`w-64 h-64 md:w-96 md:h-96
          flex justify-center items-center
          ${animatePicturePop}`}
        >
          <LazyImg
            lazyBgUrl="bg-[url('/assets/small/profile-pic.webp')]"
            lazyBgClass="rounded-full w-64 h-64 md:w-80 md:h-80"
            lazyImgUrl="/assets/webp/profile-pic.webp"
            lazyAltImg="profile-pic"
            lazyImgClass="drop-shadow-2xl w-64 h-64 md:h-80 md:w-80 transition duration-200 ease-in"
          />
        </div>
      </div>
      <div
        className="w-128 h-128 rounded-full
      absolute -bottom-10 -left-64
      blur-3xl opacity-20 md:opacity-40
      bg-slate-600"
      />
      <div
        className="w-96 h-96 rounded-full
      absolute bottom-0 right-52
      blur-3xl mix-blend-overlay opacity-0 md:opacity-50
      bg-slate-400"
      />
      <div
        className="hidden md:block w-72 h-72 rounded-full
      absolute bottom-96 left-64
      blur-3xl opacity-40
      bg-slate-600"
      />
    </div>
  );
};

export default Header;
