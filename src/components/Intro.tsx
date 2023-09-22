import React from 'react';
import Button from '@mui/material/Button';

const Intro = () => {
  return (
    <div
      className="bg-shade0 h-4/5 mt-8 ml-28
			flex flex-row justify-center
			md:flex-row md:justify-start
			border-solid border-2 border-green-500"
    >
      <div
        className="flex flex-col justify-center
        w-6/12 h-full pl-8 md:pl-14
        text-slate-100
       border-solid border-2 border-green-300"
      >
        <h1 className="text-4xl md:text-5xl
				mb-1 md:mb-3
				animate-topToBottom
				">
          Développeur full-stack
        </h1>
        <p className="text-base w-11/12
				mb-3 font-light font-lg
				animate-topToBottomDelay">
          Je suis intéressé par la résolution de problèmes en général
          mais plus particulièrement lié l'experience utilisateur à une solide architecture.
        </p>
        <Button className='w-1/3'>Contactez-moi</Button>
      </div>
      <div
        className="
				bg-[url('img/intro-bg.png')]
				bg-cover bg-no-repeat
				border-solid border-2 border-red-500"
      />
    </div>
  );
};

export default Intro;
