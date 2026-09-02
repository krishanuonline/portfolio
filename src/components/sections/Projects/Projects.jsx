import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "Sunblinds CRM & Operations",
      version: "",
      subtitle: "Complete Organisation Digitalisation",
      desc: "Architected and delivered a production React Native mobile app digitising the entire operations of a window/door blinds organisation — replacing pen-and-paper workflows across sales, procurement, and inventory. Integrated Meta and Google Ads Lead APIs for automated lead ingestion, plus a dynamic quotation engine and real-time inventory-linked sales order module.",
      image: "https://images.unsplash.com/photo-1622651491473-ff3824d12768?w=900&q=80&fm=jpg&fit=crop",
      tags: ["React Native", "Node.js", "PostgreSQL", "Meta API", "Google Ads API"],
      icon: "inventory_2",
      color: "green",
      private: true,
      codeUrl: null,
      liveUrl: null
    },
    {
      title: "NetflixGPT",
      version: "",
      subtitle: "AI-Powered Movie Showcase",
      desc: "Engineered a natural language movie search engine using the OpenAI GPT API to deliver personalized, mood-based recommendations, integrated with TMDB for real-time metadata. Built a high-performance UI with React.js, Vite, and Tailwind CSS, using Redux Toolkit for global state management and Firebase Authentication for secure user lifecycle management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPwHOjdkttDb4ipOSR-O64i8jR_i4f_-YHAi4-s7Xi6n-PZRMyHmyk4qSvgZgV_YiUjFUiTUYxnOjsRaeZk1IvcLB68P9BO41p-ffG4Kx1T4SY4OxeBKz3sCXfvu6E9-b0gEEPHPXb3FBZyOUmKT25U4DUNNV72JQowBflwoaVo5eR3FBBjUGzZlDCNGiUT9FEBphq8s89GEVeiLoF1rO5ij6xQ9CzSuzfwr0NbEsuf0ivqzjdvyenZS8hOxOqdnoprVF3ZyxrT4LW",
      tags: ["React.js", "Vite", "OpenAI API", "Redux Toolkit", "Firebase"],
      icon: "movie",
      color: "blue",
      codeUrl: "https://github.com/krishanuonline/NetflixGPT",
      liveUrl: null
    },
    {
      title: "CurrencySwap",
      version: "",
      subtitle: "Real-Time FX Intelligence Platform",
      desc: "Engineered a custom useCurrencyInfo hook to fetch and cache live mid-market exchange rates from a RESTful FX API, enabling seamless multi-currency conversions with real-time UI updates. Implemented bi-directional swap logic using advanced React Hooks, optimizing state management and minimizing re-renders across user interactions.",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=900&q=80&fm=jpg&fit=crop",
      tags: ["React.js", "Custom Hooks", "REST API", "JavaScript"],
      icon: "currency_exchange",
      color: "emerald",
      codeUrl: "https://github.com/krishanuonline/currency-converter-react",
      liveUrl: "https://currencyconverter.codeandcreatives.com/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="bg-dark-base py-24 px-4 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Personal Portfolio</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-primary text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Crafting Digital <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experiences & Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of my journey through code. Exploring full-stack development with modern technologies to build intuitive applications.
          </motion.p>
        </header>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project, index) => (
            <motion.article 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-surface rounded-2xl overflow-hidden border border-white/5 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base/90 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-accent/10 transition-transform duration-700 group-hover:scale-110">
                    <span className="material-symbols-outlined text-6xl text-primary/60">{project.icon}</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 z-20">
                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-base/60 px-3 py-1 text-xs font-bold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${index === 1 ? 'bg-emerald-400' : 'bg-primary'}`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${index === 1 ? 'bg-emerald-500' : 'bg-primary'}`}></span>
                      </span>
                      Live Project
                    </span>
                  ) : project.private ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-base/60 px-3 py-1 text-xs font-bold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md">
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      Private Client Project
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-base/60 px-3 py-1 text-xs font-bold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md">
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      Source Available
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">{project.title}</h3>
                    {project.version && <span className="text-xs font-mono text-text-secondary">{project.version}</span>}
                  </div>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">{project.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-4">
                    {project.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-primary/5 text-primary border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden rounded-xl bg-text-primary text-dark-base px-4 py-2.5 text-sm font-bold shadow transition-all hover:bg-white focus:outline-none"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Live Demo
                          <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                      </a>
                    ) : (
                      <button disabled className="flex-1 rounded-xl bg-text-primary/50 text-dark-base/60 px-4 py-2.5 text-sm font-bold cursor-not-allowed">
                        <span className="flex items-center justify-center gap-2">
                          {project.private ? 'Case Study' : 'Live Demo'}
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </span>
                      </button>
                    )}
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square p-2.5 rounded-xl bg-text-primary text-dark-base hover:bg-white transition-colors"
                      >
                        <span className="material-symbols-outlined">code</span>
                      </a>
                    ) : (
                      <span className="aspect-square p-2.5 rounded-xl bg-text-primary/50 text-dark-base/60 cursor-not-allowed">
                        <span className="material-symbols-outlined">lock</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;