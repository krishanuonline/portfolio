import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Manager – Full Stack Developer",
      company: "Anmol Feeds Private Limited",
      period: "Feb’25 - Present",
      location: "Kolkata, West Bengal",
      current: true,
      description: "A professional timeline of my roles, key projects, and technical leadership in software engineering.",
      tags: ["Node.js", "Next.js", "React.js", "PostgreSQL", "MySQL", "Prisma", "Docker", "GitHub Actions", "GitLab CI", "Microservices"],
      projects: [
        {
          name: "Prraniganga – Multi-Vendor Livestock E-Commerce",
          icon: "shopping_cart",
          desc: "Architected and launched India's first multi-vendor livestock marketplace from zero to production on a Node.js microservices backend with a Next.js frontend, scaling to 13,000+ customers and ₹1 Cr+ quarterly GMV. Built an RBAC system for 4 user personas, an automated fulfillment pipeline, and a full-stack 360° customer analytics platform with predictive LTV and purchase-cycle intelligence."
        },
        {
          name: "eParivahan – Enterprise Vehicle Procurement SaaS",
          icon: "local_shipping",
          desc: "Built a high-traffic vehicle procurement platform adopted by Tata Steel, SAIL, and Ajanta, featuring a real-time bidding/auction engine and SIM-based fleet tracking at enterprise scale. Architected CI/CD pipelines with GitHub Actions and GitLab CI, cutting deployment downtime by ~50%, and mentored 2–3 junior engineers."
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Accentus Consulting Private Limited",
      period: "Jan’24 - Aug’24",
      location: "Kolkata, West Bengal",
      current: false,
      tags: ["React.js", "Node.js", "MySQL", "Sequelize ORM", "Socket.io"],
      highlights: [
        {
          icon: "widgets",
          title: "Real-Time SaaS Features",
          desc: "Engineered real-time messaging and video calling using Socket.io, and contributed across messaging, video calling, cloud drive, and web hosting products in a fast-paced team."
        },
        {
          icon: "speed",
          title: "Performance Optimization",
          desc: "Achieved a 25% reduction in load times by migrating image handling from base64 encoding to Multer middleware, improving perceived performance for the entire user base."
        },
        {
          icon: "dashboard_customize",
          title: "No-Code Template Engine",
          desc: "Architected and built a no-code web template engine enabling clients to self-create and host editable websites, owning the full React.js frontend and Node.js/Sequelize/MySQL backend."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="bg-dark-base py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 pb-8 border-b border-white/5"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl">work_history</span>
            </div>
            <h2 className="text-text-primary text-4xl font-black tracking-tight">Corporate Experiences</h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl">
            My professional journey through technical leadership and full-stack architecture.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-16 pl-4 md:pl-0">
          
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute left-[24px] top-4 bottom-4 w-[2px] bg-surface">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-transparent"
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row gap-8 group"
            >
              {/* Dot Icon */}
              <div className="absolute left-[-32px] md:static flex flex-col items-center">
                <div className={`flex items-center justify-center size-12 rounded-full bg-surface border-2 transition-all duration-500 z-10 
                  ${exp.current ? 'border-primary shadow-[0_0_20px_rgba(97,86,226,0.4)]' : 'border-white/10 group-hover:border-primary/50'}`}>
                  <span className={`material-symbols-outlined text-xl ${exp.current ? 'text-primary' : 'text-text-secondary'}`}>
                    {exp.current ? 'verified' : 'code'}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-surface/40 backdrop-blur-sm rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:bg-surface/60 hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mt-2">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">apartment</span> {exp.company}</span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">calendar_month</span> {exp.period}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-accent text-xs font-bold border border-primary/20 animate-pulse">
                      Active Role
                    </span>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[11px] font-bold rounded-lg bg-dark-base text-text-secondary border border-white/5 group-hover:border-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Specifics (Projects or Highlights) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(exp.projects || exp.highlights).map((item, i) => (
                    <div key={i} className="bg-dark-base/50 p-5 rounded-2xl border border-white/5 hover:border-accent/20 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                        <h4 className="text-text-primary font-bold text-sm">{item.name || item.title}</h4>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Transition Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:ml-[68px] flex"
          >
            <div className="py-2 px-5 rounded-xl bg-surface/30 border border-white/5 border-dashed text-text-secondary text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              Transitioned for rapid skill growth
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;