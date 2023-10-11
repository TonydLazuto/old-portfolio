import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Navigation from './components/Navigation'

// linear-gradient(to top, rgba(1, 12, 68, 1.0), rgba(1, 42, 92, 1.0))

function App() {
  return (
		<div className='bg-gradient-to-tl from-shade3 to-white h-max'>
			<div className="h-full shadow-2xl shadow-black">
				<Navigation />
				<Header />
				<Timeline />
				<Projects />
				<Stack />
				<Contact />
			</div>
		</div>
  )
}

export default App
