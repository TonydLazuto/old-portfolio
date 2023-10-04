import timeline from '../data/timeline';
import TimelineItem from './micro-components/TimelineItem';
import { Box } from '@mui/material';

const Timeline = () => {
	return (
		<Box
			id='timeline'
			className='flex flex-col md:flex-row justify-center
			w-10/12 m-auto my-20
			bg-shade2 drop-shadow-3xl p-4 mb-4 rounded-lg
			scroll-mt-28'>
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