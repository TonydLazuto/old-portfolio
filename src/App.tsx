import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Navigation from './components/Navigation'

function App() {
  return (
		<div className='bg-slate-200 h-full'>
			<div className="h-full
			shadow-2xl shadow-black">
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
