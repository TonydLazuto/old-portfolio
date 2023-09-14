import navList from '../../data/navigation';
// transition-all duration-100 ease-in-out
const Navigation = () => {
  return (
    <div
      className="flex items-center justify-around
				w-7/12 h-full"
    >
      {navList.map((nav) => (
        <a
          className="block w-full h-full
					flex items-center justify-center
					hover:shadow-[0_10px_20px_2px_rgba(0,0,0,0.55)]
					transition-all duration-300 ease-in-out
					rounded-lg"

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
