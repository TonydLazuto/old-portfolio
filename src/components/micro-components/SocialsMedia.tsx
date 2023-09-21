import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialsMedia = () => {
	return (
		<div className='flex justify-around items-center
				w-32 h-full'>
			 <a href="https://github.com/TonydLazuto"
			 	className='block w-full h-3/5
					flex items-center justify-center
					hover:text-gray-400
					transition-all duration-500 ease-in-out
					rounded-lg'>
				<GitHubIcon fontSize='large' />
				</a>
			 <a href="https://www.linkedin.com/in/anthony-d%C3%A9ros%C3%A9-957110124/" className='block w-full h-3/5
					flex items-center justify-center
					hover:text-gray-400
					transition-all duration-500 ease-in-out
					rounded-lg'>
				<LinkedInIcon fontSize='large' />
			</a>
		</div>
	)
}

export default SocialsMedia