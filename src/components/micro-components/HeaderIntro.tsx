import React from 'react'
import { Button, Link } from '@mui/material';
import SocialsMedia from './SocialsMedia';

const HeaderIntro = () => {
  const mailPerso = "aderose73@gmail.com"
  return (
    <div
          className="flex flex-col justify-center
          w-4/5 h-full max-w-xl md:pl-8 md:pl-14
          items-center md:items-start
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
        mb-5 md:mb-3 font-light font-lg
        animate-headerDelay2 mt-2">
            Je suis intéressé par la résolution de problèmes dans l'IT,
            mais plus particulièrement allié l'experience utilisateur à une solide architecture.
        </p>
        <Button
            variant="outlined"
            className='w-1/3 animate-headerDelay3'
        >
                <Link href={`mailto:${mailPerso}`}>Contactez-moi</Link>
        </Button>
        <SocialsMedia />
        <div className='w-11 md:w-16 h-4 mt-4
        bg-sky-500/75 rounded-sm
        animate-headerDelay4' />
    </div>
  )
}

export default HeaderIntro
