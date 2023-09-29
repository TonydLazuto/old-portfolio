import { useEffect, useRef } from 'react'
import timeline from '../data/timeline';
import TimelineItem from './micro-components/TimelineItem';

const Timeline = () => {
	// const myRef = useRef();
	// useEffect(() => {
	// 	console.log(myRef.current);
	// }, [])
	return (
		<div
			className='flex flex-col md:flex-row justify-center
			w-10/12 m-auto my-20
			bg-shade2 drop-shadow-3xl p-4 mb-4 rounded-lg'>
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