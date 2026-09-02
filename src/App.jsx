import React from 'react'
import { LenisProvider } from './context/LenisContext'
import { ContactModalProvider, useContactModal } from './context/ContactModalContext'
import Header from './components/layout/Header/Header'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Experience from './components/sections/Experiences/Experiences'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'
import ResearchAndDevelopment from './components/sections/ResearchAndDevelopment/ResearchAndDevelopment'
import Acamedic from './components/sections/Acamedic/Acamedic'
import Certifications from './components/sections/Certifications/Certifications'
import Footer from './components/layout/Footer/Footer'
import WhatsAppButton from './components/common/WhatsAppButton/WhatsAppButton'
import ScrollProgressBar from './components/common/ScrollProgressBar/ScrollProgressBar'
import CursorGlow from './components/common/CursorGlow/CursorGlow'
import CustomCursor from './components/common/CustomCursor/CustomCursor'
import TechMarquee from './components/common/TechMarquee/TechMarquee'
import ContactModal from './components/common/ContactModal/ContactModal'

function ContactModalRoot() {
	const { isOpen, close } = useContactModal();
	return <ContactModal isOpen={isOpen} onClose={close} />;
}

function App() {
	return (
		<LenisProvider>
			<ContactModalProvider>
				<ScrollProgressBar />
				<CursorGlow />
				<CustomCursor />
				<Header />
				<Home />
				<TechMarquee />
				<About />
				<Experience />
				<Projects />
				<Skills	/>
				<ResearchAndDevelopment />
				<Acamedic />
				<Certifications />
				<Footer />
				<WhatsAppButton />
				<ContactModalRoot />
			</ContactModalProvider>
		</LenisProvider>
	)
}

export default App
