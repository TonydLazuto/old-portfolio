import stacks from '../data/stack';

const Stack = () => {
	return (
		<div
			id='stack'
			className='flex flex-col items-center
				justify-center w-screen h-[calc(100vh_-_30rem)]
				py-4'>
			<div className='flex justify-center flex-wrap
				items-center w-1/2'>
				{stacks.map((stack) => (
					<img
						src={stack.src}
						alt={stack.alt}
						className='w-10 h-10 mx-1'
					/>
				))}
			</div>
		</div>
	)
}

export default Stack