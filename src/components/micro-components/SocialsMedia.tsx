import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IsMobile } from '../../App';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import Fade from '@mui/material/Fade';

const SocialsMedia = ({ isMobile }: IsMobile) => {
  const [socialMediaHoverClass, setSocialMediaHoverClass] = useState("");

  const handleStackHoverEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSocialMediaHoverClass("animate-tooltipEnter");
  };
  const handleStackHoverLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSocialMediaHoverClass("animate-tooltipLeave");
  };

	return (
    <div
      className={`flex justify-around items-center
        w-24 h-12`}
    >
      <Tooltip
        onMouseEnter={handleStackHoverEnter}
        onMouseLeave={handleStackHoverLeave}
        title="GitHub"
        placement="left"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 200 }}
        arrow
      >
        <a
          href="https://github.com/TonydLazuto"
          className="block w-full h-full
          flex items-center justify-center
          text-gray-100
          hover:text-gray-400
          hover:border-b-8 hover:border-sky-600
          transition-all duration-200 ease-out"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </Tooltip>
      <Tooltip
        onMouseEnter={handleStackHoverEnter}
        onMouseLeave={handleStackHoverLeave}
        title="LinkedIn"
        placement="right"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 200 }}
        arrow
      >
        <a
          href="https://www.linkedin.com/in/anthony-d%C3%A9ros%C3%A9-957110124/"
          className="block w-full h-full
          flex items-center justify-center
          text-gray-100
          hover:text-gray-400
          hover:border-b-8 hover:border-sky-600
          transition-all duration-100 ease-out"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </Tooltip>
    </div>
  );
}

export default SocialsMedia