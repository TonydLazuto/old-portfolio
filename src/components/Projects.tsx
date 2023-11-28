import React from 'react'
import projects from '../data/projects';
import ProjectItemMobile from './micro-components/ProjectItemMobile';
import ProjectItemDesktop from './micro-components/ProjectItemDesktop';
import useObserver from '../hooks/useObserver';

export interface IsMobile {
	isMobile: boolean
}

const Projects = (props: IsMobile) => {
	const { isMobile } = props;
	const obsRef = useObserver();

	return (
    <div
      id="projects"
      className="m-auto
			min-h-screen md:min-h-[calc(100vh_-_5rem)]
			scroll-mt-12 mt-24
			"
    >
      <h1
        ref={obsRef}
        className="h-16 w-2/3 md:w-fit
			m-auto md:m-0 md:ml-36 md:mb-12
			mb-20 md:px-8
			pt-2
			text-4xl md:text-5xl
			text-center md:text-left
			font-semibold
			bg-shade2
			rounded-md
			shadow-xl md:shadow-lg
			font-display"
      >
        Projets
      </h1>
      <div
        className="w-11/12 md:w-3/4 m-auto flex
				flex-col md:flex-row
				items-center md:items-start
				justify-between flex-wrap"
      >
        {isMobile
          ? projects.map((project) => (
              <ProjectItemMobile
                key={project.title}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                stack={project.stack}
                details={project.details}
                link={project.link}
                logoUrl={project.logoUrl}
                linkName={project.linkName}
              />
            ))
          : projects.map((project) => (
              <ProjectItemDesktop
                key={project.title}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                stack={project.stack}
                details={project.details}
                logoUrl={project.logoUrl}
                link={project.link}
              />
            ))}
      </div>
    </div>
  );
}

export default Projects