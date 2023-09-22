import React from 'react'

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
		<div className='border-2 border-stone-900 rounded-md overflow-hidden'>
				<img
					src={imgUrl}
					alt="project"
					className="w-full h-36 md:h-48 object-cover cursor-pointer"
				/>
				<div className='p-2'>
					<h3 className='text-lg md:text-xl
						mb-2 md:mb-3 font-semibold'>
							{title}
					</h3>
					<p className='flex flex-wrap gap-2
						flex-row items-center justify-start text-xs md:text-sm'>
						{stack.map((item: string) => (
							<span className='inline-block px-2 py-1
								font-semi-bold border-2 border-stone-900 rounded-md'>
								{item}
							</span>
						))}
					</p>
				</div>
		</div>
	)
}

export default ProjectItem