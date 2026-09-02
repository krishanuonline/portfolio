import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';

const About = () => {
  const drivers = [
    {
      icon: 'school',
      title: 'Continuous Learning',
      desc: 'Always staying ahead of the curve, constantly upskilling in the latest frameworks and architectural patterns to deliver cutting-edge solutions.',
    },
    {
      icon: 'lightbulb',
      title: 'Research & Innovation',
      desc: 'Dedicated to deep-diving into complex problems and engineering innovative, scalable solutions that drive business value.',
    },
    {
      icon: 'groups',
      title: 'Mentorship & Community',
      desc: 'Believer in knowledge sharing. I actively contribute to the developer community and mentor junior engineers to foster growth.',
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-dark-base py-20 px-4 sm:px-10">
      <div className="max-w-[960px] mx-auto flex flex-col">
        
        {/* Profile Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-8 lg:flex-row items-center py-10"
        >
          {/* Image Container */}
          <motion.div variants={itemVariants} className="w-full max-w-[400px] lg:w-1/2">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-2xl relative overflow-hidden group border border-white/10"
              style={{ backgroundImage: 'url("/images/aboutphoto.png")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent opacity-60"></div>
              {/* Subtle hover zoom */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url('/images/aboutphoto.png')] bg-cover bg-center" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 w-full lg:w-1/2 lg:justify-center">
            <div className="flex flex-col gap-4 text-left">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent shadow-sm">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                2+ Years Corporate Experience
              </div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-text-primary lg:text-5xl">
                Architecting the <span className="text-primary">Future</span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                I am <strong className="text-text-primary">Krishanu Mandal</strong>, a Full-Stack Software Engineer with 2+ years of end-to-end ownership — from system architecture to production delivery. I've led teams as a technical lead, mentored junior engineers, and driven projects from the ground up to scale. I bring a rare mix of strong development skills, leadership, and project management to every team I work with.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <Magnetic strength={0.4}>
                <a
                  href="mailto:krishanu178@gmail.com"
                  className="h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 flex items-center justify-center"
                >
                  Hire Me
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="https://drive.google.com/file/d/141tPhKEN4r8BKDCzS1I4J71DTOOwjsL3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 rounded-xl border border-surface bg-surface/50 text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center"
                >
                  View Resume
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* Drives Section */}
        <div className="py-12 border-t border-white/5">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center pb-12 text-text-primary"
          >
            What Drives Me
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {drivers.map((drive, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface p-6 shadow-sm transition-all hover:border-primary/50 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[28px]">{drive.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-text-primary">{drive.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {drive.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 flex flex-col items-center text-center gap-6 border-t border-white/5 mt-10"
        >
          <h2 className="text-3xl font-bold text-text-primary">Ready to build something amazing?</h2>
          <p className="text-text-secondary max-w-xl">
            I'm currently available for full-time opportunities and freelance projects. Let's discuss how I can contribute to your team.
          </p>
          <Magnetic strength={0.35}>
            <motion.a
              href="mailto:krishanu178@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 bg-primary hover:bg-primary-hover text-white font-bold rounded-2xl shadow-2xl shadow-primary/30 transition-all flex items-center justify-center"
            >
              Hire Me
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default About;