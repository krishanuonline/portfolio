import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../../common/ContactModal/ContactModal';
import Magnetic from '../../common/Magnetic/Magnetic';
import { useScrollTo } from '../../../context/LenisContext';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const scrollTo = useScrollTo();

	const navLinks = [
		{ name: 'About Me', href: '#about' },
		{ name: 'Corporate Experiences', href: '#experience' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skill set', href: '#skills' },
		{ name: 'R&D', href: '#rd' },
		{ name: 'Education', href: '#education' },
		{ name: 'Certification', href: '#certifications' },
	];

	// Add a shadow/background opacity change on scroll for better UX
	useEffect(() => {
		const handleScroll = () => {
		setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Scroll-spy: highlight the nav link for the section currently in view
	useEffect(() => {
		const ids = navLinks.map((link) => link.href.slice(1));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	const handleNavClick = (e, href) => {
		e.preventDefault();
		setIsMenuOpen(false);
		scrollTo(href);
	};

	return (
		<header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? 'bg-dark-base/90 backdrop-blur-md border-surface shadow-lg' : 'bg-transparent border-transparent'}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					{/* Brand Lockup */}
					<div
						onClick={() => scrollTo(0)}
						className="flex items-center gap-3 group cursor-pointer"
					>
						<div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary transition-transform group-hover:scale-110">
							<div className="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn3bwOQw7OMeQXP4lgiHKE-e2KMz33JGF4eHMTz53wugysq0IH5kDltsx9rVEsVlj7qMpmEnoZmgwZ2p9434vnYrK8_CwfzGSDiX-iY9xgAg3H_GFDRODK4uwk0sVsoqztK6CZTIbqUdpGqb-87x4Ak3k0TRvFwY_5ND7x8Jzccp0fszpZKKCg_oS5G4nYBej4X5Sqg1TnCtzjQKK0lMr13ns4ZkYwKxlMeWyarvl9LXS_MBKW249fmGq_ba1lJy-ngwyOngKj8ZMU")' }}/>
						</div>
						<div className="flex flex-col"> <h1 className="text-lg font-bold tracking-tight text-text-primary"> Krishanu Mandal </h1>
							<span className="text-[10px] uppercase tracking-widest text-accent font-bold">Portfolio</span>
						</div>
					</div>
					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1 xl:gap-2">
						{navLinks.map((link) => {
							const isActive = activeSection === link.href.slice(1);
							return (
								<a
									key={link.name}
									href={link.href}
									onClick={(e) => handleNavClick(e, link.href)}
									className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-surface ${isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
								>
									{link.name}
									{isActive && (
										<motion.span
											layoutId="nav-active-indicator"
											className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-primary"
											transition={{ type: 'spring', stiffness: 380, damping: 30 }}
										/>
									)}
								</a>
							);
						})}
					</nav>
					{/* Action Button (Optional but recommended) */}
					<div className="hidden lg:block">
						<Magnetic strength={0.3}>
							<button onClick={() => setIsContactOpen(true)} className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(97,86,226,0.3)] cursor-pointer">Contact</button>
						</Magnetic>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors">
						<span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface border-b border-white/5 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} >
				<nav className="flex flex-col p-4 space-y-2">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={(e) => handleNavClick(e, link.href)}
							className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${activeSection === link.href.slice(1) ? 'text-primary bg-primary/10' : 'text-text-secondary hover:text-text-primary hover:bg-primary/10'}`}
						>
							{link.name}
						</a>
					))}
					<button
						onClick={() => { setIsMenuOpen(false); setIsContactOpen(true); }}
						className="mt-2 bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-xl text-base font-bold transition-all active:scale-95"
					>
						Contact
					</button>
				</nav>
			</div>

			<ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
		</header>
	);
};

export default Header;
