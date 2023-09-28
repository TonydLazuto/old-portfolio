import React from 'react'

export interface Timeline {
	key: string
	year: string
	title: string
	duration: string
	details: string
}

const TimelineItem = (timeline: Timeline) => {
	const { year, title, duration, details } = timeline;

	return (
		<ol className='flex flex-col md:flex-row
				animate-timeline
				bg-shade2 drop-shadow-3xl pt-4 mb-4 rounded-lg'>
			<li className='mb-4 ml-4'>
				<div className='absolute w-4 h-4 bg-slate-300
					rounded-full mt-1 -left-7 border-white
					animate-timelineDelay3' />
				<p className='flex flex-wrap gap-4 flex-row
					items-center justify-start
					text-xs md:text-sm
					animate-timelineDelay'>
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
				</p>
				<p className='my-2 text-base font-normal
					text-stone-500
					animate-timelineDelay2'>
					{details}
				</p>
			</li>
		</ol>
	)
}

export default TimelineItem