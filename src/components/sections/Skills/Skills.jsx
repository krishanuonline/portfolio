import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="skills" className="relative bg-dark-base py-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">verified</span>
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Top Tier Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-text-primary tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Proficiencies</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting seamless digital experiences with a robust arsenal of modern technologies.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {/* Programming Languages */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-white/5 group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-lg">
                <span className="material-symbols-outlined text-[28px]">code_blocks</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'Java', 'PHP', 'HTML/CSS'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/5 text-text-secondary border border-white/10 hover:scale-105 transition-transform cursor-default">
                   {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dev Tools */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 p-8 rounded-3xl bg-surface border border-white/5 hover:border-accent/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                <span className="material-symbols-outlined text-[28px]">build_circle</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Postman', 'Git', 'GitHub', 'GitLab'].map(tool => (
                <span key={tool} className="px-3 py-1.5 rounded-lg bg-dark-base text-text-secondary text-sm font-bold border border-white/5">{tool}</span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks Stack */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 lg:row-span-2 p-8 rounded-3xl bg-surface border border-white/5 hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">layers</span> Stack
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'NextJS', 'Redux', 'Tailwind'].map(s => <span key={s} className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">{s}</span>)}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['NodeJS', 'Express', 'Laravel'].map(s => <span key={s} className="px-3 py-1 text-xs rounded-md bg-green-500/10 text-green-400 border border-green-500/20">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 p-8 rounded-3xl bg-surface border border-white/5 hover:border-orange-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                <span className="material-symbols-outlined text-[28px]">dns</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Infrastructure</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{i:'deployed_code', n:'Docker'}, {i:'cloud', n:'AWS'}, {i:'terminal', n:'Linux'}, {i:'database', n:'Atlas'}].map(item => (
                <div key={item.n} className="flex flex-col items-center p-4 rounded-xl bg-dark-base hover:bg-primary/10 transition-colors border border-white/5 group">
                  <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors">{item.i}</span>
                  <span className="text-xs font-bold mt-2 text-text-secondary">{item.n}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Utils */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 p-8 rounded-3xl bg-surface border border-white/5">
            <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">Utilities</h4>
            <div className="flex flex-wrap gap-3">
              {['FileZilla', 'phpMyAdmin', 'Android Studio', 'MS Office'].map(u => (
                <span key={u} className="px-4 py-2 rounded-full bg-dark-base text-text-secondary text-xs border border-white/5">{u}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Learning Status */}
        <div className="mt-12 flex justify-center">
          <p className="text-sm text-text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Constantly learning and expanding this stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;