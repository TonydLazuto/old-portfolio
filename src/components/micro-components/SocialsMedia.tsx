import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IsMobile } from '../../App';

const SocialsMedia = ({ isMobile }: IsMobile) => {
  const animateHeaderDelay3 = isMobile ? '' : 'animate-headerDelay3';

	return (
    <div className={`flex justify-around items-center
        w-24 h-12 ${animateHeaderDelay3}`}>
      <a href="https://github.com/TonydLazuto"
        className='block w-full h-full
          flex items-center justify-center
          text-gray-100
          hover:text-gray-400
          hover:border-b-8 hover:border-sky-600
          transition-all duration-300 ease-out'>
        <GitHubIcon fontSize='large' />
        </a>
      <a href="https://www.linkedin.com/in/anthony-d%C3%A9ros%C3%A9-957110124/"
        className='block w-full h-full
          flex items-center justify-center
          text-gray-100
          hover:text-gray-400
          hover:border-b-8 hover:border-sky-600
          transition-all duration-300 ease-out'>
        <LinkedInIcon fontSize='large' />
      </a>
	  </div>
	)
}

export default SocialsMedia