import { ArrowObserver } from '../hooks/arrowObserver';
import HeaderIntro from './micro-components/HeaderIntro';

//border-solid border-2 border-green-500
const Header = (props: ArrowObserver) => {
  const { obsRef } = props;
  return (
    <div
      ref={obsRef}
      id='header'
      className='bg-shade0 pt-32
        w-screen min-h-[calc(100vh_-_2rem)]'>
      <div
        className="
        h-[calc(100vh_-_12rem)] md:h-4/5
        w-11/12 mt-8 m-auto
        flex flex-col
        justify-center
        text-center md:text-left
        items-center md:items-start
        md:flex-row md:justify-start"
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
            w-2/5 h-2/5 md:w-4/5 md:h-4/5
            blur-xl"
          />
        </div>
      </div>
      <div className='w-96 h-96 rounded-full
      absolute -bottom-10 -left-20
      blur-3xl opacity-40
      bg-slate-600'/>
      <div className='w-96 h-96 rounded-full
      absolute bottom-0 right-52
      blur-3xl mix-blend-overlay opacity-50
      bg-slate-400'/>
      <div className='w-72 h-72 rounded-full
      absolute bottom-96 right-80
      blur-3xl opacity-60
      bg-slate-700'/>
    </div>
  );
};

export default Header;
