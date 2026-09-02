import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrambleText } from '../../../hooks/useScrambleText';
import Magnetic from '../../common/Magnetic/Magnetic';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/krishanuonline',
    icon: (
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krishanumandal/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/krishanu_on_the_go/',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    )
  },
  {
    name: 'Gmail',
    href: 'mailto:krishanu178@gmail.com',
    icon: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    )
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [scramblePlaying, setScramblePlaying] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setScramblePlaying(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const scrambledName = useScrambleText('Krishanu', scramblePlaying, { revealDelay: 3, holdFrames: 10 });

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 }
    }
  };

  return (
    <main ref={heroRef} className="relative flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-dark-base overflow-hidden">
		{/* Background Ambient Glow */}
		<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
		<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

		<div className="w-full max-w-6xl mx-auto z-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			
			{/* Text Content Section */}
			<motion.div variants={staggerContainer} initial="hidden" animate="visible" className="order-2 lg:order-1 flex flex-col gap-8 text-center lg:text-left" >
				<div className="space-y-4">
				<h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-text-primary">
					<motion.span variants={fadeInUp} className="block">
						Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{scrambledName}</span>.
					</motion.span>
					<motion.span variants={fadeInUp} className="block text-text-primary/90">
						Software Engineer
					</motion.span>
				</h2>

				<motion.p variants={fadeInUp} className="text-lg sm:text-xl text-text-secondary font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
					Turning coffee into code and bugs into features. A full-stack developer who loves building scalable solutions for the modern web.
				</motion.p>
				</div>

				{/* CTA & Socials */}
				<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6 mt-2">
					<Magnetic strength={0.4}>
						<motion.a
							href="https://drive.google.com/file/d/141tPhKEN4r8BKDCzS1I4J71DTOOwjsL3/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgba(97, 86, 226, 0.5)" }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center justify-center h-14 px-8 rounded-2xl bg-primary text-white text-base font-bold transition-colors shadow-lg shadow-primary/20 cursor-pointer"
						>
							<span className="material-symbols-outlined mr-2 cursor-pointer">download</span>Download Resume
						</motion.a>
					</Magnetic>

					<div className="flex items-center gap-4">
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.href}
								target={social.href.startsWith('http') ? '_blank' : undefined}
								rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								aria-label={social.name}
								whileHover={{ y: -5, backgroundColor: "var(--color-primary)", color: "#fff" }}
								className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-text-secondary transition-colors"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
									{social.icon}
								</svg>
							</motion.a>
						))}
					</div>
					</motion.div>
				</motion.div>

				{/* Hero Image Section */}
				<motion.div style={{ y: imageY }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
					<div className="relative group">
						{/* Animated Floating Frame */}
						<motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
							<div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent z-10" />
							<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-soft-light z-10 pointer-events-none" />
							<img src="/images/image-1.png" alt="Krishanu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 contrast-110 saturate-125" onLoad={(e) => console.log(`Image natural size: ${e.target.naturalWidth}x${e.target.naturalHeight}`)} />

							<motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-8 z-20 flex items-center gap-3 bg-surface/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl" >
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-dark-base">
									<span className="material-symbols-outlined font-bold">terminal</span>
								</div>
								<div>
									<p className="text-[10px] text-accent font-black uppercase tracking-widest">Status</p>
									<p className="text-sm text-text-primary font-bold">Available for Hire</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>

			</div>
		</div>
    </main>
  );
};

export default Home;