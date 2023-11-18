import timeline from '../data/timeline';
import TimelineItem from './micro-components/TimelineItem';
import { Box } from '@mui/material';

const Timeline = () => {
	return (
		<Box
			id='timeline'
			className='mt-24
			flex flex-col md:flex-row justify-center
			w-2/3 md:w-1/2
			md:min-h-full
			m-auto
			scroll-mt-24'>
			<Box
				className='w-full md:7/12'
			>
				{timeline.map((timeline) => (
					<TimelineItem
						key={timeline.year}
						year={timeline.year}
						title={timeline.title}
						duration={timeline.duration}
						details={timeline.details}
					/>
				))}
			</Box>
		</Box>
	)
}

export default Timeline