import React from 'react'
import Header from './components/layout/Header/Header'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Experience from './components/sections/Experiences/Experiences'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'
import ResearchAndDevelopment from './components/sections/ResearchAndDevelopment/ResearchAndDevelopment'
import Acamedic from './components/sections/Acamedic/Acamedic'
import Certifications from './components/sections/Certifications/Certifications'

function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Skills	/>
			<ResearchAndDevelopment />
			<Acamedic />
			<Certifications />
			
		</>
	)
}

export default App
