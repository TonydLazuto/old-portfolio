import React from 'react';
import Navigation from './micro-components/Navigation';
import SocialsMedia from './micro-components/SocialsMedia';
//border-solid border-2 border-green-500
const Header = () => {
  return (
    <div
      className="fixed top-0 w-full flex items-center
			justify-between px-5 py-2 border-b-2
			border-solid border-slate-700 bg-shade0 opacity-70
			text-slate-100"
    >
      <Navigation />
      <SocialsMedia />
    </div>
  );
};

export default Header;
