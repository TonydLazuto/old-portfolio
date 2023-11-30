import { ArrowObserver } from '../hooks/arrowObserver';
import { useMobile } from '../hooks/useMobile';
import HeaderIntro from './micro-components/HeaderIntro';

interface Header {
  obsRef: React.RefObject<HTMLDivElement>
}

const Header = (props: Header) => {
  const { obsRef } = props;
  const { isMobile } = useMobile();

  const animatePicturePop = isMobile ? '' : 'animate-picturePop';
  return (
    <div
      ref={obsRef}
      id='header'
      className='bg-shade0
        w-screen min-h-[calc(100vh_-_2rem)]
        flex justify-center items-center'>
      <div
        className="h-full
        md:w-11/12
        flex flex-col md:flex-row
        justify-center items-center
        text-center md:text-left"
      >
        <HeaderIntro />
        <div
          className={`w-3/4 md:w-1/4 md:min-w-[20em]
          h-full mt-4 md:mt-0
          flex justify-center items-center
          ${animatePicturePop}`}>
          <img
            src="/assets/profile-pic.png"
            alt="profile-pic"
            className="drop-shadow-4xl
            object-scale-down
            w-1/3 h-1/3
            md:w-4/5 md:h-4/5"
          />
        </div>
      </div>
      <div className='w-128 h-128 rounded-full
      absolute -bottom-10 -left-64
      blur-3xl opacity-40
      bg-slate-600'/>
      <div className='w-96 h-96 rounded-full
      absolute bottom-0 right-52
      blur-3xl mix-blend-overlay opacity-50
      bg-slate-400'/>
      <div className='hidden md:block w-72 h-72 rounded-full
      absolute bottom-96 left-64
      blur-3xl opacity-40
      bg-slate-600'/>
    </div>
  );
};

export default Header;
