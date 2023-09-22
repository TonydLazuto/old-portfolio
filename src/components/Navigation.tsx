import navList from '../data/navigation';
// transition-all duration-100 ease-in-out
const Navigation = () => {
  return (
    <div
      // className="flex items-center justify-around
			// 	w-7/12 h-full"
        className="fixed top-4 left-1/2
        -translate-x-1/2
        w-2/5 h-12
        flex items-center justify-around
        shadow-[0_10px_20px_2px_rgba(0,0,0,0.55)]
        rounded-3xl z-10
        text-slate-100 text-lg"
        // md:text-2xl md:h-24
    >
      {navList.map((nav) => (
        <a
          className="block w-full h-full
					flex items-center justify-center
					hover:shadow-[0_10px_20px_2px_rgba(0,0,0,0.55)]
					transition-all duration-300 ease-in-out
					rounded-3xl"

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
