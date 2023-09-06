import { useState } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="h-full min-h-screen">
			<Header />
			<Intro />
			<Timeline />
			<Projects />
			<Stack />
			<Contact />
    </div>
  )
}

export default App
