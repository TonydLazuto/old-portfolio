import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import navList from '../data/navigation';

const BurgerMenuNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navigationClass, setNavigationClass] = useState('hidden');
    const [burgerAnimation, setBurgerAnimation] = useState('animate-burgerMenu');
    const navigationRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navigationRef.current !== null &&
        !navigationRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const hideMenu = () => {
      setIsMenuOpen(false);
      };

    useEffect(() => {
      if (isMenuOpen) {
        setNavigationClass("flex");
        document.addEventListener('click', handleClickOutside);

      } else {
        setNavigationClass("hidden");
      }
      return () => {
        document.removeEventListener('click', handleClickOutside);
      }
    }, [isMenuOpen]);

  return (
    <div className={`md:hidden`} ref={navigationRef}>
      <div
        className={`absolute top-8 right-8 z-20
        ${burgerAnimation}
        hover:cursor-pointer hover:scale-150 hover:rotate-180`}
        onClick={toggleMenu}
        onAnimationEnd={() => setBurgerAnimation('transition-all duration-200 ease-in-out')}
      >
        <MenuIcon fontSize='large' sx ={{ color: 'white' }}/>
      </div>
      <div
        className={`fixed
            right-0 h-screen w-1/2 z-20
            bg-gradient-to-br
            from-slate-700 via-indigo-900 to-slate-800
            flex justify-center items-center
            ${navigationClass}`}
      >
        <div
          className="flex flex-col justify-around items-center
            text-slate-200 text-2xl font-bold
            h-3/6 w-full"
        >
          {navList.map((nav) => (
            <a
              className="block w-full h-full
					flex items-center justify-center
					hover:shadow-[0_10px_20px_2px_rgba(0,0,0,0.25)]
          hover:bg-gradient-to-br
					transition-all duration-300 ease-in-out"
              key={nav.name}
              href={nav.path}
              onClick={hideMenu}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerMenuNavigation
