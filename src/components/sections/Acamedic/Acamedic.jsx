import React from 'react';
import { motion } from 'framer-motion';

const Acamedic = () => {
  const degrees = [
    {
      title: "Master of Computer Application (MCA)",
      institution: "Brainware University, Kolkata",
      year: "2024",
      score: "CGPA: 8.8",
      icon: "school",
      desc: "Specialized in advanced software development, algorithm design, and system architecture. Capstone project focused on full-stack web application development.",
      color: "primary"
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      institution: "Brainware University, Kolkata",
      year: "2022",
      score: "CGPA: 9.2",
      icon: "history_edu",
      desc: "Built a solid foundation in programming logic, database management, and computer networks. Graduated with honors and high academic distinction.",
      color: "accent"
    }
  ];

  return (
    <section id="education" className="bg-dark-base py-20 px-4 md:px-10">
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
            Academic Background
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            My educational path has been driven by a passion for computer science, building a strong theoretical foundation for my career in software engineering.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-[27px] top-4 bottom-12 w-[2px] bg-surface hidden md:block" />

          <div className="flex flex-col gap-4">
            {degrees.map((degree, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-x-6 pb-8"
              >
                {/* Icon Column */}
                <div className="flex flex-col items-center pt-1 z-10 relative">
                  <div className="flex items-center justify-center size-14 rounded-full bg-surface border border-white/5 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(97,86,226,0.2)] transition-all duration-300">
                    <span className="material-symbols-outlined text-text-secondary group-hover:text-primary text-[28px]">
                      {degree.icon}
                    </span>
                  </div>
                  {/* Mobile-only connecting line */}
                  <div className="w-[px] bg-surface h-full absolute top-14 left-1/2 -translate-x-1/2 md:hidden" />
                </div>

                {/* Content Card */}
                <div className="flex flex-col pt-1 pl-4 md:pl-0">
                  <div className="relative p-6 rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-sm group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-300">
                    
                    {/* Triangle pointer (Desktop) */}
                    <div className="absolute top-6 -left-[8px] w-4 h-4 bg-surface/50 border-l border-b border-white/5 rotate-45 hidden md:block group-hover:border-primary/30 transition-colors" />

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                          {degree.title}
                        </h3>
                        <div className="flex items-center gap-2 text-text-secondary mt-1">
                          <span className="material-symbols-outlined text-[18px]">apartment</span>
                          <span className="text-sm font-medium">{degree.institution}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-lg bg-dark-base text-text-secondary text-xs font-bold border border-white/5">
                          {degree.year}
                        </span>
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold ring-1 ring-inset ${index === 0 ? 'bg-primary/10 text-primary ring-primary/20' : 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20'}`}>
                          {degree.score}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <p className="text-sm text-text-secondary leading-relaxed italic">
                        {degree.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acamedic;