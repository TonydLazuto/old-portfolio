import React from 'react'
import projects from '../data/projects';
import ProjectItemMobile from './micro-components/ProjectItemMobile';
import ProjectItemDesktop from './micro-components/ProjectItemDesktop';

export interface IsMobile {
	isMobile: boolean
}

const Projects = (props: IsMobile) => {
	const { isMobile } = props;

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
				{isMobile ?
					projects.map((project) => (
						<ProjectItemMobile
							key={project.title}
							title={project.title}
							description={project.description}
							imgUrl={project.imgUrl}
							stack={project.stack}
							details={project.details}
							link={project.link}
							linkName={project.linkName}
						/>
					)) :
					projects.map((project) => (
						<ProjectItemDesktop
							key={project.title}
							title={project.title}
							description={project.description}
							imgUrl={project.imgUrl}
							stack={project.stack}
							details={project.details}
							link={project.link}
						/>
					))}
			</div>
		</div>
	)
}

export default Projects