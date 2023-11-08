import { Box } from "@mui/material"

interface Project {
	key: string
	title: string
	description: string
	imgUrl: string
	stack: string[]
	details: string[]
}

interface Props {
    project: Project
}

const ProjectDetails = (props: Props) => {
    const { project } = props;
    const { title, description, imgUrl, stack, details } = project;
  return (
    <div>
      <Box
        className="
            flex flex-col items-center justify-center
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-1/2 h-1/2"
      >
        <h2 id="title">{title}</h2>
        <p id="description">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </p>
      </Box>
    </div>
  );
}

export default ProjectDetails
