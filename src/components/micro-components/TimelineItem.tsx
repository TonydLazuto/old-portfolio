import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export interface Timeline {
	key: string
	year: string
	title: string
	duration: string
	details: string
}

//TODO: define useref() Type
//TODO: add animation to className
const TimelineItem = (timeline: Timeline) => {
	const { year, title, duration, details } = timeline;

	const myRef = useRef<JSX.Element>();
	const [timelineIsVisible, setTimelineIsVisible] = useState<boolean>();

	console.log(timelineIsVisible);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			// only observe the first time
			if (entry.isIntersecting) observer.unobserve(entry.target);
			setTimelineIsVisible(entry.isIntersecting);
		},
		{
			threshold: 1
		})
		observer.observe(myRef.current);
	}, []);

	return (
		<Box
			ref={myRef}
			className='flex flex-col md:flex-row
				border-l border-slate-300 relative'>
			<Box className='mb-4 ml-4'>
				<div className='absolute w-3 h-3 bg-slate-300
					rounded-full mt-2 -left-1.5 border-white' />
				<Box className='flex flex-wrap gap-4 flex-row
					items-center justify-start
					text-xs md:text-sm'>
						<span className='inline-block px-2 py-1 font-semibold
							text-white bg-stone-900 rounded-md'>
							{year}
						</span>
						<h3 className='text-lg font-semibold text-stone-900
							drop-shadow-4xl'>
							{title}
						</h3>
						<div className='text-sm font-normal leading-none
							text-stone-400'>
							{duration}
						</div>
				</Box>
				<div className='my-2 text-base font-normal
					text-stone-500'>
					{details}
				</div>
			</Box>
		</Box>
	)
}

export default TimelineItem