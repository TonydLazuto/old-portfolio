import timeline from '../data/timeline';
import useObserver from '../hooks/useObserver';
import TimelineItem from './micro-components/TimelineItem';
import { Box } from '@mui/material';

const Timeline = () => {
	const obsRef = useObserver();

	return (
    <Box
      id="timeline"
      className="mt-24
      w-screen
			md:min-h-full
			m-auto
			scroll-mt-32"
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
        Timeline
      </h1>
      <Box className="w-2/3 md:w-1/2 m-auto">
        {timeline.map((timeline) => (
          <TimelineItem
            key={timeline.year}
            year={timeline.year}
            title={timeline.title}
            duration={timeline.duration}
            details={timeline.details}
            logoUrl={timeline.logoUrl}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Timeline