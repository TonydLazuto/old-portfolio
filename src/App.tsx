import Header from './components/Header'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Navigation from './components/Navigation'
import { useRef } from 'react';
import arrowObserver from './hooks/arrowObserver';
import ArrowNavigation from './components/ArrowNavigation'
import Footer from './components/Footer'

function App() {
	const obsRef = useRef<HTMLDivElement>(null);
	const [animation, hidden] = arrowObserver({ obsRef });

  return (
		<div className='w-screen h-max'>
			<div className="w-full h-full shadow-2xl shadow-black">
				<Navigation />
				<Header obsRef={obsRef} />
				<Timeline />
				<Projects />
				<Stack />
				<Footer />
				<ArrowNavigation animation={animation} hidden={hidden} />
			</div>
		</div>
  )
}

export default App
