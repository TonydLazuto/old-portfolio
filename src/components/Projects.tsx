import React from 'react'
import projects from '../data/projects';
import ProjectItem from './micro-components/ProjectItem';

const Projects = ({}) => {
	return (
		<div
			id='projects'
			className='flex flex-col md:flex-row items-center
			justify-center m-auto w-10/12'>
			<div className='grid grid-cols-1
				md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{projects.map((project) => (
					<ProjectItem
						key={project.title}
						title={project.title}
						imgUrl={project.imgUrl}
						stack={project.stack}
						link={project.link}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects