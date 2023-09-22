import Intro from './Intro';
import Navigation from './Navigation';
import SocialsMedia from './micro-components/SocialsMedia';
//border-solid border-2 border-green-500
const Header = () => {
  return (
    <div className='bg-shade0 pt-16 h-screen
    border-solid border-2 border-purple-300'>
      <Intro />
      <SocialsMedia />
    </div>
  );
};

export default Header;
