import React from 'react';
import navpath from '../../data/navigation';

const Navigation = () => {
  return (
    <div
      className="flex items-center justify-between
				grow max-w-md"
    >
      {navpath.map((nav) => (
        <a
          className="h-7 min-h-fit
						transition-all duration-100 ease-in-out
						hover:border-b-2 border-solid border-slate-200"
          key={nav.name}
          href={nav.path}
        >
          {nav.name}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
