import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="relative flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-dark-base overflow-hidden">
		{/* Background Ambient Glow */}
		<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
		<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

		<div className="w-full max-w-6xl mx-auto z-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			
			{/* Text Content Section */}
			<motion.div variants={staggerContainer} initial="hidden" animate="visible" className="order-2 lg:order-1 flex flex-col gap-8 text-center lg:text-left" >
				<div className="space-y-4">
				<motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-text-primary">
					Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Krishanu</span>.<br/>
					<span className="text-text-primary/90">Software Engineer</span>
				</motion.h2>
				
				<motion.p variants={fadeInUp} className="text-lg sm:text-xl text-text-secondary font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
					Turning coffee into code and bugs into features. A full-stack developer who loves building scalable solutions for the modern web.
				</motion.p>
				</div>

				{/* CTA & Socials */}
				<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6 mt-2">
					<motion.button whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgba(97, 86, 226, 0.5)" }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center h-14 px-8 rounded-2xl bg-primary text-white text-base font-bold transition-colors shadow-lg shadow-primary/20 cursor-pointer">
						<span className="material-symbols-outlined mr-2 cursor-pointer">download</span>Download Resume
					</motion.button>

					<div className="flex items-center gap-4">
						{['code', 'work', 'globe', 'photo_camera'].map((icon, index) => (
							<motion.a key={index} href="#" whileHover={{ y: -5, backgroundColor: "var(--color-primary)", color: "#fff" }} className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-text-secondary transition-colors">
								<span className="material-symbols-outlined text-[22px]">{icon}</span>
							</motion.a>
						))}
					</div>
					</motion.div>
				</motion.div>

				{/* Hero Image Section */}
				<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
					<div className="relative group">
						{/* Animated Floating Frame */}
						<motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
							<div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent z-10" />
							<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVWmyRv3VCTSnt1dQmzl5Iznnzo-3GNAXmDPQkoYWcgB_Y82S-cB9n1m8FNYsqwOUzNRHlBWxLsl7aesdhuzxe6IRQhUXLzDhVa0gZDmZ9uG63aq_eQ65KGFj4u8jwpdZ4kfSZmPElqYeg2_jMvs-W2FsbeyI8O-8TewzynTomhtCLdcE57k2zH1-PBG65veLre7Z9q9L6owmShEuesYnYHD0U7EIToFX5ymjHm8mT20y9NhFbr_zLAHw6ztW2dLLCCcBzgc8o3UdF" alt="Krishanu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

							{/* Floating Badge */}
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