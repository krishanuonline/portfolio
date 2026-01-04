import React from 'react'
import Header from './components/layout/Header/Header'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Experience from './components/sections/Experiences/Experiences'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'

function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Skills	/>
		</>
	)
}

export default App
