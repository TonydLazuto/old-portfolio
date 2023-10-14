import { useRef } from 'react';
import stacks from '../data/stack';
import useObserver from '../hooks/useObserver';

const Stack = () => {
    const obsRef = useObserver({
		animationProps: 'animate-leftToRight'
	});

	return (
		<div
			id='stack'
			className='flex flex-col items-center
				justify-center w-screen h-[calc(100vh_-_30rem)]
				py-4'>
			<div
                ref={obsRef}
                className='flex justify-evenly flex-wrap
				items-center w-1/2'>
				{stacks.map((stack, index) => (
					<img
						key={index}
						src={stack.src}
						alt={stack.alt}
						className='w-20 h-20 mx-1'
					/>
				))}
			</div>
		</div>
	)
}

export default Stack