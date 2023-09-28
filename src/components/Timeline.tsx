import React from 'react'
import timeline from '../data/timeline';
import TimelineItem from './micro-components/TimelineItem';

const Timeline = () => {
	return (
		<div
			className='flex flex-col md:flex-row justify-center
			w-10/12 m-auto my-20
			border-l border-slate-300 pl-5'>
			<div className='w-full md:7/12'>
				{timeline.map((timeline) => (
					<TimelineItem
						key={timeline.year}
						year={timeline.year}
						title={timeline.title}
						duration={timeline.duration}
						details={timeline.details}
					/>
				))}
			</div>
		</div>
	)
}

export default Timeline