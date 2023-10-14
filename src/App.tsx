import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Navigation from './components/Navigation'
import { useRef } from 'react';
import arrowObserver from './hooks/arrowObserver';
import ArrowNavigation from './components/ArrowNavigation'
// linear-gradient(to top, rgba(1, 12, 68, 1.0), rgba(1, 42, 92, 1.0))

function App() {
	const obsRef = useRef<HTMLDivElement>(null);
	const [animation, hidden] = arrowObserver({ obsRef });

  return (
		<div className='bg-gradient-to-tl from-shade3 to-white h-max'>
			<div className="h-full shadow-2xl shadow-black">
				<Navigation />
				<Header obsRef={obsRef} />
				<Timeline />
				<Projects />
				<Stack />
				<Contact />
				<ArrowNavigation animation={animation} hidden={hidden} />
			</div>
		</div>
  )
}

export default App
