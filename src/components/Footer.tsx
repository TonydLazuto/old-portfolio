const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div
			className='h-20 bg-gradient-to-t from-shade0 via-slate-800 to-indigo-900
				flex justify-center items-center
				font-bold text-white'>
				<p>Copyright © Anthony Derose - {year}</p>
		</div>
	)
}

export default Footer