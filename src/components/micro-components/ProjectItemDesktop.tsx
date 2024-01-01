import { Box, Link } from '@mui/material'
import { useState } from 'react'
import useObserver from '../../hooks/useObserver'
import ProjectDetails from './ProjectDetails'
import imageKit from '../../data/imagekit';
import LazyImg from './LazyImg';
export interface Project {
	key: string
	title: string
	description: string
	imgUrl: string
	stack: string[]
	details: string[]
  link: string
  logoUrl: string
  isMobile: boolean
  bgLazy: string
}
const ProjectItemDesktop = (project: Project) => {
	const {
    title,
    description,
    imgUrl,
    stack,
    details,
    link,
    logoUrl,
    isMobile,
    bgLazy,
  } = project;
	const [hidden, setHidden] = useState('hidden');
	const [projectItemClass, setProjectItemClass] = useState('');
	const [imgClass, setImgClass] = useState('');
	const [projectContainerClass, setProjectContainerClass] = useState('');

  const obsRef = useObserver({ isMobile });
  const { urlEndpoint } = imageKit;

	const handleProjectHoverEnter = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		if (hidden) {
			setHidden('');
			setProjectItemClass('animate-projectHoverEnter');
      setProjectContainerClass('animate-projectContainerHoverEnter');
			setImgClass('animate-projectImgHoverEnter');
		}
	}
	const handleProjectHoverLeave = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		if (!hidden) {
			setHidden('hidden');
			setProjectItemClass('animate-projectHoverLeave');
      setProjectContainerClass('animate-projectContainerHoverLeave');
			setImgClass('animate-projectImgHoverLeave');
		}
	}

	// const handleProjectDetails = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	// 	e.preventDefault();
	// }

	return (
    <Box
      ref={obsRef}
      className={`rounded-md w-112 md:w-96 mb-4 ${projectItemClass}`}
      onMouseEnter={handleProjectHoverEnter}
      onMouseLeave={handleProjectHoverLeave}
    >
      <Link href={link} style={{ textDecoration: 'none', color: 'black' }}>
        <Box
        // onClick={handleProjectDetails}
        >
           <LazyImg
            lazyBgUrl={bgLazy}
            lazyBgClass={`${projectContainerClass}
              w-112 h-72 md:w-96 md:h-64`}
            lazyImgUrl={`/assets/webp/${imgUrl}`}
            lazyAltImg={title}
            lazyImgClass={`rounded-t-lg object-fit ${imgClass}
              w-112 h-72 md:w-96 md:h-64`}
          />
          <Box className={`p-2 ${projectContainerClass}`}>
            <h2
              className="text-lg md:text-xl
							mb-2 md:mb-3 font-semibold"
            >
              {title}
            </h2>
            <h3
              className={`text-base md:text-lg
							mb-2 md:mb-3
							animate-projectDescriptionPop ${hidden}`}
            >
              {description}
            </h3>
            <Box
              className="flex flex-wrap gap-2
							flex-row items-center justify-start text-xs md:text-sm"
            >
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-block px-2 py-1
									font-semi-bold border-2 border-stone-900 rounded-md"
                >
                  {item}
                </span>
              ))}
            </Box>
            <div className='flex justify-end mt-4'>
              <img
                src={`${urlEndpoint}/${logoUrl}`}
                alt={title}
                className='
                w-12 max-w-fit max-h-6'
              />
            </div>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default ProjectItemDesktop