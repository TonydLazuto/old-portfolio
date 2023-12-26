import HeaderIntro from './micro-components/HeaderIntro';

interface Header {
  obsRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
}
// 170 100
const Header = ({ obsRef, isMobile }: Header) => {

  const animatePicturePop = isMobile ? '' : 'animate-picturePop';
  const profilePicPath = isMobile ? '/assets/profile-pic-mobile.avif' : '/assets/profile-pic.avif';
  const profilePicWidth = isMobile ? '' : 'md:w-4/5 w-1/2';
  return (
    <div
      ref={obsRef}
      id='header'
      className='bg-shade0
        w-screen
        h-200 md:h-auto
        md:min-h-[calc(100vh_-_2rem)]
        flex justify-center items-center'>
      <div
        className="h-full
        md:w-11/12
        flex flex-col md:flex-row
        justify-center items-center
        text-center md:text-left
        gap-8 md:gap-12"
      >
        <HeaderIntro isMobile={isMobile}/>
        <div
          className={`w-3/4 md:w-1/4 md:min-w-[20em]
          h-auto md:h-full
          flex justify-center items-center
          ${animatePicturePop}`}>
          <img
            src={profilePicPath}
            alt="profile-pic"
            className={`drop-shadow-4xl ${profilePicWidth}`}
          />
        </div>
      </div>
      <div className='w-128 h-128 rounded-full
      absolute -bottom-10 -left-64
      blur-3xl opacity-20 md:opacity-40
      bg-slate-600'/>
      <div className='w-96 h-96 rounded-full
      absolute bottom-0 right-52
      blur-3xl mix-blend-overlay opacity-0 md:opacity-50
      bg-slate-400'/>
      <div className='hidden md:block w-72 h-72 rounded-full
      absolute bottom-96 left-64
      blur-3xl opacity-40
      bg-slate-600'/>
    </div>
  );
};

export default Header;
