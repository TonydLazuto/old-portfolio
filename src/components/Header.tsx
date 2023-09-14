import Navigation from './micro-components/Navigation';
import SocialsMedia from './micro-components/SocialsMedia';
//border-solid border-2 border-green-500
const Header = () => {
  return (
    <div
      className="fixed top-0 w-10/12 h-24 flex items-center
			justify-between border-b-2 pr-8
			border-solid border-slate-700 bg-slate-700 z-10
			text-slate-100 text-3xl"
    >
      <Navigation />
      <SocialsMedia />
    </div>
  );
};

export default Header;
