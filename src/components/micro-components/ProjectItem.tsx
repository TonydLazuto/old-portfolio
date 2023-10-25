import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import useObserver from '../../hooks/useObserver'

export interface Project {
	key: string
	title: string
	description: string
	imgUrl: string
	stack: string[]
	details: string[]
}
const ProjectItem = (project: Project) => {
	const { title, description, imgUrl, stack, details } = project;
	const [hidden, setHidden] = useState('hidden');
	const [hoverDesign, setHoverDesign] = useState('');
	const [imgClass, setImgClass] = useState('');

    const obsRef = useObserver({
		animationProps: 'animate-bottomToTop'
	});

	const handleProjectHoverEnter = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		if (hidden) {
			setHidden('');
			setHoverDesign('cursor-pointer rounded-xl drop-shadow-4xl bg-shade1');
			setImgClass('rounded-t-xl');
		}
	}
	const handleProjectHoverLeave = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		if (!hidden) {
			setHidden('hidden');
			setHoverDesign('');
			setImgClass('');
		}
	}

	return (
		<Box ref={obsRef}
			className={`rounded-md overflow drop-shadow-3xl
                 w-96 h-fit mb-4 ${hoverDesign}`}
				 onMouseEnter={handleProjectHoverEnter}
				 onMouseLeave={handleProjectHoverLeave}>
			<img
				src={imgUrl}
				alt="project"
				className={`w-full h-72
							object-cover ${imgClass}`}
			/>
			<Box className='p-2'>
				<h3 className='text-lg md:text-xl
						mb-2 md:mb-3 font-semibold'>
					{title}
				</h3>
				<h4 className={`text-lg md:text-lg
						mb-2 md:mb-3
						animate-projectDescriptionPop ${hidden}`}>
					{description}
				</h4>
				<Box className='flex flex-wrap gap-2
						flex-row items-center justify-start text-xs md:text-sm'>
					{stack.map((item) => (
						<span key={item} className='inline-block px-2 py-1
								font-semi-bold border-2 border-stone-900 rounded-md'>
							{item}
						</span>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default ProjectItem