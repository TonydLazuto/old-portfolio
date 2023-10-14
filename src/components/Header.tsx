import { Button, Link } from '@mui/material';
import SocialsMedia from './micro-components/SocialsMedia';
import { ArrowObserver } from '../hooks/arrowObserver';

//border-solid border-2 border-green-500
const Header = (props: ArrowObserver) => {
  const { obsRef } = props;
  return (
    <div
      ref={obsRef}
      id='header'
      className='bg-shade0 pt-32
        w-screen h-[calc(100vh_-_2rem)]'>
      <div
        className="h-4/5 w-11/12 mt-8 m-auto
        flex flex-row justify-center
        md:flex-row md:justify-start"
      >
        <div
          className="flex flex-col justify-center
          w-3/5 h-full pl-8 md:pl-14
          text-slate-100 z-10
          animate-header"
        >
          <h1 className="
          text-4xl md:text-5xl
          mb-1 md:mb-3
          animate-headerDelay">
            Je suis <span className='text-blue-800'>Anthony</span>,<br />
            Développeur full-stack
          </h1>
          <p className="text-base w-11/12
          mb-3 font-light font-lg
          animate-headerDelay2 mt-2">
            Je suis intéressé par la résolution de problèmes dans l'IT,
            mais plus particulièrement allié l'experience utilisateur à une solide architecture.
          </p>
          <Button
            variant="outlined"
            className='w-1/3 animate-headerDelay3'>
            <Link href="#contact">Contactez-moi</Link>
          </Button>
          <SocialsMedia />
          <div className='w-16 h-4 mt-4
          bg-sky-500/75 rounded-sm
          animate-headerDelay4' />
        </div>
      </div>
      <div className='w-96 h-96 rounded-full
      absolute -bottom-10 -left-20
      blur-3xl opacity-30
      bg-slate-600'/>
      <div className='w-96 h-96 rounded-full
      absolute bottom-0 right-20
      blur-3xl mix-blend-overlay opacity-70
      bg-slate-400'/>
      <div className='w-72 h-72 rounded-full
      absolute bottom-80 right-60
      blur-3xl opacity-50
      bg-slate-700'/>
    </div>
  );
};

export default Header;
