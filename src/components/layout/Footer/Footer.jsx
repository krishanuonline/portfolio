import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    { 
      icon: 'call', 
      label: '+91 8609801667', 
      href: 'tel:+918609801667' 
    },
    { 
      icon: 'mail', 
      label: 'krishanu178@gmail.com', 
      href: 'mailto:krishanu178@gmail.com' 
    },
    { 
      icon: 'location_on', 
      label: 'Kolkata, West Bengal, India', 
      href: null 
    }
  ];

  return (
    <footer className="relative border-t border-white/5 bg-dark-base pt-16 pb-8 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Brand & Scroll Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">code</span>
            </div>
            <span className="text-xl font-black tracking-tight text-text-primary uppercase">
              Krishanu<span className="text-primary"> Mandal</span>
            </span>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-surface border border-white/5 text-text-secondary hover:text-primary transition-all shadow-xl"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Back to top</span>
            <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform">arrow_upward</span>
          </motion.button>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          {contactInfo.map((info, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-primary mb-3 text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {info.icon}
              </span>
              {info.href ? (
                <a 
                  href={info.href} 
                  className="text-text-primary font-bold hover:text-primary transition-colors text-center md:text-left"
                >
                  {info.label}
                </a>
              ) : (
                <span className="text-text-primary font-bold text-center md:text-left">
                  {info.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-text-secondary text-xs font-medium tracking-wide leading-loose">
                © {new Date().getFullYear()} <span className="text-text-primary font-bold">Krishanu Mandal</span>. 
                <span className="hidden sm:inline"> | </span> 
                <br className="sm:hidden" />
                Designed with precision and engineered with <span className="text-primary font-semibold italic">React & Tailwind</span>.
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;