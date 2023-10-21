import React from 'react'
import projects from '../data/projects';
import ProjectItem from './micro-components/ProjectItem';

const Projects = ({}) => {
	return (
		<div
			id='projects'
			className='flex flex-col md:flex-row items-center
			justify-center
			m-auto mx-20
			min-h-screen md:min-h-[calc(100vh_-_5rem)]
			scroll-mt-12 mt-24
			'>
			<div className='w-screen flex
				flex-col md:flex-row
				items-center md:items-start
				justify-evenly flex-wrap'>
				{projects.map((project) => (
					<ProjectItem
						key={project.title}
						title={project.title}
						description={project.description}
						imgUrl={project.imgUrl}
						stack={project.stack}
						details={project.details}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects