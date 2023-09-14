import Contact from './components/Contact'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'

function App() {
  return (
		<div className='bg-slate-500 h-full'>
			<div className="m-auto h-fit w-10/12 bg-slate-400
			shadow-2xl shadow-black">
				<Header />
				<Intro />
				<Timeline />
				<Projects />
				<Stack />
				<Contact />
			</div>
		</div>
  )
}

export default App
