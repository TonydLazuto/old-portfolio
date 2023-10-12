import { Box } from '@mui/material'

export interface Project {
	key: string
	title: string
	imgUrl: string
	stack: string[]
	link: string
}
const ProjectItem = (project: Project) => {
	const { title, imgUrl, stack, link } = project;

	return (
		<Box className='rounded-md overflow drop-shadow-3xl'>
			<img
				src={imgUrl}
				alt="project"
				className="w-full h-36
							object-cover cursor-pointer
							md:h-72"
			/>
			<Box className='p-2'>
				<h3 className='text-lg md:text-xl
						mb-2 md:mb-3 font-semibold'>
					{title}
				</h3>
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