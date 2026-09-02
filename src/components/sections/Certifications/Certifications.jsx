import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      title: "Full Stack Web Development (MERN & SQL)",
      issuer: "Udemy",
      type: "Full Stack",
      stack: "MongoDB, Express.js, React, Node.js, SQL, Docker",
      icon: "school",
      color: "bg-primary/15 text-primary"
    },
    {
      title: "Advanced Frontend Engineering",
      issuer: "NamasteDev",
      type: "Frontend",
      stack: "ReactJS with Redux Toolkit",
      icon: "workspace_premium",
      color: "bg-blue-400/15 text-blue-400"
    },
    {
      title: "Backend Specialization",
      issuer: "Udemy",
      type: "Backend",
      stack: "PHP with Laravel Framework",
      icon: "dns",
      color: "bg-emerald-400/15 text-emerald-400"
    },
    {
      title: "Node.js Full Stack Certification",
      issuer: "VAC, Brainware University",
      type: "Full Stack",
      stack: "Web Application Development",
      icon: "account_balance",
      color: "bg-amber-400/15 text-amber-400"
    },
    {
      title: "Diploma in Information Technology Application (DITA)",
      issuer: "NAHM",
      type: "Diploma",
      stack: "Core IT Fundamentals",
      icon: "verified",
      color: "bg-violet-400/15 text-violet-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const demoImage = '/images/image-1.png';

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openModal = (index) => {
    setActiveCert(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="certifications" className="bg-dark-base py-20 px-4 md:px-10">
      <div className="max-w-[1080px] mx-auto flex flex-col flex-1">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 px-4 pb-12 pt-5"
        >
          <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight">
            Certifications & <span className="text-primary">Development</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            A collection of professional credentials demonstrating continuous learning in full-stack engineering and modern frameworks.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col gap-5 bg-surface rounded-2xl border border-white/5 p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${cert.color}`}>
                  <span className="material-symbols-outlined text-[26px]">{cert.icon}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-dark-base text-text-secondary border border-white/5">
                  {cert.type}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
                {cert.stack && (
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {cert.stack}
                  </p>
                )}
                <div className="flex items-center gap-2 text-text-secondary text-sm font-semibold pt-2 border-t border-white/5">
                  <span className="material-symbols-outlined text-[16px] text-accent">apartment</span>
                  <span>{cert.issuer}</span>
                </div>

                <motion.button 
                  type="button"
                  onClick={() => openModal(index)}
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/link cursor-pointer"
                >
                  <span>View Certificate</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:animate-pulse">open_in_new</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
            role="dialog" 
            aria-modal="true"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-[90vw] md:w-[70vw] rounded-2xl overflow-hidden bg-surface border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeModal} 
                className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-dark-base/70 text-text-secondary hover:text-primary hover:bg-dark-base cursor-pointer"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {/* Image container */}
              <div className="w-full max-h-[80vh] bg-dark-base">
                <img 
                  src={demoImage}
                  alt={activeCert != null ? certs[activeCert].title : 'Certificate preview'}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;