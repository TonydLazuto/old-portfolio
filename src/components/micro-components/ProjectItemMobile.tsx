import { Box, Link } from '@mui/material'
import { useState } from 'react'
import useObserver from '../../hooks/useObserver'
import ProjectDetails from './ProjectDetails'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import imageKit from '../../data/imagekit';

export interface Project {
	key: string
	title: string
	description: string
	imgUrl: string
	stack: string[]
	details: string[]
  link: string
  linkName: string
  logoUrl: string
  isMobile: boolean
}
const ProjectItemMobile = (project: Project) => {
	const {
    title,
    description,
    imgUrl,
    stack,
    details,
    link,
    linkName,
    logoUrl,
    isMobile
  } = project;
	const [hidden, setHidden] = useState('hidden');
	const [projectItemClass, setProjectItemClass] = useState('');
	const [imgClass, setImgClass] = useState('');

  const obsRef = useObserver({ isMobile });
  const { urlEndpoint } = imageKit;

	// const handleProjectDetails = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	// 	e.preventDefault();
	// }

  const toggleProjectDescription = () => {
    if (hidden) {
      setHidden('');
      setProjectItemClass('animate-projectHoverEnterMobile');
      setImgClass('animate-projectImgHoverEnter');
    }
    else {
      setHidden('hidden');
      setProjectItemClass('animate-projectHoverLeaveMobile');
      setImgClass('animate-projectImgHoverLeave');
    }
  };

	return (
    <Box
      ref={obsRef}
      className={`rounded-md
				w-80 mb-4 ${projectItemClass}`}
      onClick={toggleProjectDescription}
    >
        <Box>
          <img
            src={`${urlEndpoint}/tr:ar-4-3/mobiles/${imgUrl}`}
            alt="project"
            className={`rounded-t-lg object-cover ${imgClass}
            w-80 h-52`}
            srcSet={`${urlEndpoint}/tr:ar-4-3/mobiles/${imgUrl}`}
            sizes='288px'
          />
          <Box className="p-2">
            <h2
              className="text-lg md:text-xl
							mb-2 font-semibold"
            >
              {title}
            </h2>
            <h3
              className={`text-base md:text-lg
							mb-2
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
                className={`max-w-fit max-h-6
                ${title === 'Acenstream' || title === 'Syneryx' ? 'w-12': 'w-4'} `} // aim at 42logo size
              />
            </div>
            <div className={`${hidden} animate-projectDescriptionPop mt-4`}>
              <Link href={link} style={{
                textDecoration: 'none',
                color: '#1A1E38',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                borderRadius: '0.6em',
                height: '2.5em',
                width: '100%',
                letterSpacing: '0.025em',
                lineHeight: '2rem'
              }}>
                <ExitToAppIcon />
                <span className='ml-1'>{linkName}</span>
              </Link>
            </div>
          </Box>
        </Box>
    </Box>
  );
}

export default ProjectItemMobile