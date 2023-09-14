import React from 'react';

const Intro = () => {
  return (
    <div
      className="bg-shade0 
			flex flex-row justify-center
			 pt-24 md:flex-row md:justify-start
			border-solid border-2 border-green-500"
    >
      <div
        className="flex flex-col 
			 h-full pl-8 md:pl-14 text-slate-100"
      >
        <h1 className="text-4xl md:text-6xl
				mb-1 md:mb-3 font-bold
				animate-topToBottom
				translate-y-10">
          Anthony DEROSE
        </h1>
        <p className="text-base md:text-2xl
				mb-3 font-medium
				translate-y-10
				animate-topToBottomDelay">
          Salut je suis un full stack developer junior,
          <br />
          intéressé par l'adaptabilité des architectures à un projet
          <br />
          j'aime lié l'experience utilisateur à un back-end intuitif{' '}
        </p>
      </div>
      <div
        className="w-full md:w-full 
				bg-[url('img/intro-bg.png')]
				bg-cover bg-no-repeat
				border-solid border-2 border-red-500"
      />
    </div>
  );
};

export default Intro;
