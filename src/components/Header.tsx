import { ArrowObserver } from '../hooks/arrowObserver';
import HeaderIntro from './micro-components/HeaderIntro';

//border-solid border-2 border-green-500
const Header = (props: ArrowObserver) => {
  const { obsRef } = props;
  return (
    <div
      ref={obsRef}
      id='header'
      className='bg-shade0
        w-screen min-h-[calc(100vh_-_2rem)]
        flex justify-center items-center
        pt-32 md:pt-0'>
      <div
        className="
        h-[calc(100vh_-_12rem)] md:h-full
        w-11/12 m-auto
        flex
        flex-col md:flex-row
        justify-center
        text-center md:text-left
        items-center"
      >
        <HeaderIntro />
        <div
          className="w-full md:w-2/5
          h-full p-10
          flex justify-center items-center
          animate-picturePop">
          <img
            src="/assets/profile-pic.png"
            alt="profile-pic"
            className="drop-shadow-4xl
            object-scale-down
            w-2/5 h-2/5 md:w-4/5 md:h-4/5"
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
      <div className='w-72 h-72 rounded-full
      absolute bottom-96 left-64
      blur-3xl opacity-40
      bg-slate-600'/>
    </div>
  );
};

export default Header;
