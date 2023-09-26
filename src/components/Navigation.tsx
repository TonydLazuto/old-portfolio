import navList from '../data/navigation';
// transition-all duration-100 ease-in-out
const Navigation = () => {
  return (
    <div
        className="fixed top-4 left-1/2
        bg-gradient-to-br
        from-slate-700 via-indigo-900 to-slate-800
        opacity-90
        -translate-x-1/2
        w-3/12 h-12
        flex items-center justify-around
        shadow-[0_10px_20px_2px_rgba(0,0,0,0.35)]
        rounded-3xl z-20
        text-slate-200 text-sm"
        // md:text-2xl md:h-24
    >
      {navList.map((nav) => (
        <a
          className="block w-full h-full
					flex items-center justify-center
					hover:shadow-[0_10px_20px_2px_rgba(0,0,0,0.25)]
          hover:bg-gradient-to-br
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
