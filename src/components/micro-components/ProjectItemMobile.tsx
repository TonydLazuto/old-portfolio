import { Box, Link } from '@mui/material'
import { useState } from 'react'
import useObserver from '../../hooks/useObserver'
import ProjectDetails from './ProjectDetails'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
  } = project;
	const [hidden, setHidden] = useState('hidden');
	const [projectItemClass, setProjectItemClass] = useState('');
	const [imgClass, setImgClass] = useState('');

  const imgStyle = title === 'Portfolio' ? 'object-contain' : 'object-cover';
  const obsRef = useObserver();

	// const handleProjectDetails = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	// 	e.preventDefault();
	// }

  const toggleProjectDescription = () => {
    if (hidden) {
      setHidden('');
      setProjectItemClass('animate-projectHoverEnter');
      setImgClass('animate-projectImgHoverEnter');
    }
    else {
      setHidden('hidden');
      setProjectItemClass('animate-projectHoverLeave');
      setImgClass('animate-projectImgHoverLeave');
    }
  };

	return (
    <Box
      ref={obsRef}
      className={`rounded-md overflow drop-shadow-3xl
				w-4/5 md:w-96 mb-4 ${projectItemClass}`}
      onClick={toggleProjectDescription}
    >
        <Box>
          <img
            src={imgUrl}
            alt="project"
            className={`w-full md:min-h-full h-80 md:h-72 rounded-t-lg
					${imgStyle} ${imgClass}`}
          />
          <Box className="p-2">
            <h3
              className="text-lg md:text-xl
							mb-2 md:mb-3 font-semibold"
            >
              {title}
            </h3>
            <h4
              className={`text-base md:text-lg
							mb-2 md:mb-3
							animate-projectDescriptionPop ${hidden}`}
            >
              {description}
            </h4>
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
            {<img
                src={logoUrl}
                alt={title}
                className='mt-4 w-12 max-w-fit max-h-6'
              />}
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