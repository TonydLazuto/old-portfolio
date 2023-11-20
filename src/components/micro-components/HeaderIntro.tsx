import React from 'react'
import { Button, Link } from '@mui/material';
import SocialsMedia from './SocialsMedia';

const HeaderIntro = () => {
  const mailPerso = "aderose73@gmail.com"
  return (
    <div
      className="flex flex-col justify-center
          w-4/5 h-full max-w-xl md:pl-8
          items-center md:items-start
          text-slate-100 z-10
          animate-header"
    >
      <h1
        className="
        text-2xl md:text-3xl
        mb-1 md:mb-3
        animate-headerDelay"
      >
        Je suis <span className="text-blue-800">Anthony</span>,<br />
        Développeur full-stack
      </h1>
      <p
        className="text-sm md:text-lg w-11/12
        mb-5 md:mb-3 font-light
        animate-headerDelay2 mt-2"
      >
        Passionné par le développement web, je me spécialise dans les technologies Node et React.<br />
        De la conception à la réalisation, je m'engage à créer des expériences utilisateurs dynamiques et innovantes avec une solide architecture.
      </p>
      <Button variant="outlined" className="w-1/3 animate-headerDelay3">
        <Link href={`mailto:${mailPerso}`}>Contactez-moi</Link>
      </Button>
      <SocialsMedia />
    </div>
  );
}

export default HeaderIntro
