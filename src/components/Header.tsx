import HeaderIntro from "./micro-components/HeaderIntro";

interface Header {
  obsRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
}

const Header = ({ obsRef, isMobile }: Header) => {
  const animatePicturePop = isMobile ? "" : "animate-picturePop";
  const imgUrl = isMobile ? "/assets/mobiles/profile-pic.webp" : "/assets/webp/profile-pic.webp";
  return (
    <div
      ref={obsRef}
      id="header"
      className="bg-shade0
        w-screen
        h-200
        md:h-[calc(100vh_-_2rem)]
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
          className={`w-48 h-48 md:w-96 md:h-96
          flex justify-center items-center
          ${animatePicturePop}`}
        >
          <img
            src={imgUrl}
            alt="profile-pic"
            className="w-48 h-48 md:h-80 md:w-80 md:max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
