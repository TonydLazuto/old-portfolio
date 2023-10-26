import { Box, Button, Modal } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

interface Project {
	key: string
	title: string
	description: string
	imgUrl: string
	stack: string[]
	details: string[]
}

interface Props {
    open: boolean
    handleOpen: (bool: boolean) => void
    project: Project
}

const ProjectDetails = (props: Props) => {
    const { open, handleOpen, project } = props;
    const { title, description, imgUrl, stack, details } = project;
    const handleClose = () => {
        handleOpen(false);
	};
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
    >
        <Box
         className='
            flex flex-col items-center justify-center
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-1/2 h-1/2'
        >
            <h2 id="child-modal-title">{title}</h2>
            <p id="child-modal-description">
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </p>
            <Button onClick={handleClose}>
                <CloseIcon />
            </Button>
        </Box>
        </Modal>
    </div>
  )
}

export default ProjectDetails
