import React from 'react'
import { Button, Link } from '@mui/material';
import SocialsMedia from './SocialsMedia';

interface HeaderIntroProps {
  isMobile: boolean
}

const HeaderIntro = (props: HeaderIntroProps) => {
  const { isMobile } = props;
  const animateHeader = isMobile ? '' : 'animate-header';
  const animateHeaderDelay = isMobile ? '' : 'animate-headerDelay';
  const animateHeaderDelay2 = isMobile ? '' : 'animate-headerDelay2';
  const styleKeyWords = 'text-sky-600 font-semibold';

  return (
    <div
      className={`flex flex-col justify-center
          w-4/5 h-full max-w-xl md:pl-8
          items-center md:items-start
          text-slate-100 z-10
          ${animateHeader}`}
    >
      <h1
        className={`
        text-2xl md:text-3xl
        mb-1 md:mb-3
        ${animateHeaderDelay}`}
      >
        Je suis <span className="text-blue-800 font-semibold">Anthony</span>,<br />
        Développeur full-stack
      </h1>
      <p
        className={`text-sm md:text-lg w-11/12
        mb-5 md:mb-3 font-light mt-2
        ${animateHeaderDelay2}`}
      >
        Passionné par le{" "}
        <span className={`${styleKeyWords}`}>développement web</span>, je me
        spécialise dans les technologies{" "}
        <span className={`${styleKeyWords}`}>Node</span> et{" "}
        <span className={`${styleKeyWords}`}>React</span>.<br />
        De la conception à la réalisation, je m'engage à créer des{" "}
        <span className={`${styleKeyWords}`}>
          expériences utilisateurs
        </span>{" "}
        dynamiques et innovantes avec une solide{" "}
        <span className={`${styleKeyWords}`}>architecture</span>.
      </p>
      <SocialsMedia isMobile={isMobile} />
    </div>
  );
}

export default HeaderIntro
