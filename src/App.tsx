import Header from './components/Header'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Navigation from './components/Navigation'
import { useEffect, useRef, useState } from 'react';
import arrowObserver from './hooks/arrowObserver';
import ArrowNavigation from './components/ArrowNavigation'
import Footer from './components/Footer'

function App() {
	const obsRef = useRef<HTMLDivElement>(null);
	const [animation, hidden] = arrowObserver({ obsRef });
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
	}, []);

  return (
		<div className='w-screen h-max font-serif'>
			<div className="w-full h-full shadow-2xl shadow-black">
				<Navigation />
				<Header isMobile={isMobile} obsRef={obsRef} />
				<Timeline />
				<Projects isMobile={isMobile} />
				<Stack />
				<Footer />
				<ArrowNavigation animation={animation} hidden={hidden} />
			</div>
		</div>
  )
}

export default App
