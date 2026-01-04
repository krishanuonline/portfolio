import React from 'react'
import Header from './components/layout/Header/Header'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Experience from './components/sections/Experiences/Experiences'
import Projects from './components/sections/Projects/Projects'

function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Experience />
			<Projects />
		</>
	)
}

export default App
