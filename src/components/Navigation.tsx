import navList from '../data/navigation';
import BurgerMenuNavigation from './BurgerMenuNavigation';

const Navigation = () => {

  return (
    <div>
      <BurgerMenuNavigation />
      <div
        className="hidden md:flex
        items-center justify-around
        fixed
        bg-gradient-to-br
        from-slate-700 via-indigo-900 to-slate-800
        top-4 left-1/2
        opacity-90
        -translate-x-1/2
        w-3/12 h-12
        drop-shadow-3xl
        rounded-3xl z-20
        text-slate-200 text-sm"
      >
        {navList.map((nav) => (
          <a
            className="block w-full h-full
					flex items-center justify-center
					hover:shadow-[0_10px_20px_2px_rgba(0,0,0,0.25)]
          hover:bg-gradient-to-br
					transition-all duration-100 ease-in-out
					rounded-3xl"
            key={nav.name}
            href={nav.path}
          >
            {nav.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
