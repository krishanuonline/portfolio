import React from 'react';
import { motion } from 'framer-motion';

const ResearchAndDevelopment = () => {
  const rdItems = [
    {
      type: "Patent Filed",
      icon: "verified",
      badgeColor: "bg-primary/10 text-primary",
      iconColor: "text-primary",
      title: "DEVELOPMENT OF A WEB-BASED CALCULATOR FOR DATA CENTER EFFICIENCY ANALYSIS AND OPTIMIZATION",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0B7mSLzt28Otov6zi8vEibuJ9CQdbJXQRrOUppu6K7ANmyIwXBVOvxsN72lyarULaioO2dHdM7VLOWnIKsJX3g8FYg0yslFE125GWsfSewE5LrDWvxOgQkZLG1KEk0_z7ax8Id31mr9XWShvCYUQunShQCbv2y4Xjc7cddyRko2ddPxJyKul0v3aZ2UJfMSGKdGnteUi-FDOAqeagwjBiWY8VPN7BU_mzysfWSGnAZPodzXUqrk5A8wIQ3C24PVhG73Z2Ay_TuSd4",
      imgIcon: "analytics",
      details: [
        { label: "Application No.", value: "20233103564A" },
        { label: "Issue No.", value: "21/2023" },
        { label: "Date", value: "26/05/2023" }
      ],
      buttonText: "View Patent Details",
      buttonIcon: "arrow_forward",
      buttonLink: "https://drive.google.com/file/d/1V2q6NVzLRmVDkGUmeSAUDIWK7hji1YIZ/view",
      primaryBtn: true
    },
    {
      type: "Handbook",
      icon: "menu_book",
      badgeColor: "bg-emerald-500/10 text-emerald-500",
      iconColor: "text-emerald-500",
      title: "MySQL Beginner to Advance",
      description: "A comprehensive handbook for mastering MySQL database management, covering fundamental queries to complex optimization techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbZL9AEOK3kxAVF2Road5zYKkian3ArcsQmjXGRMNWN34iv-pHrRvK9r-RXvu3qaDrKftyhIZNlaKfrtjyBjHdDf7rryIqi5--4HbIc6LzJUpJ3Ilwn37V8NDeURCLlcs1Kh3CnL2Uv9hbGopUN5SaxxKj1NmrslcD8eq-oLHsaep8yJAdlgtApdh3cZaKafD7CwqNawyDLGNv1KLmddoI-j8cvI2j5tVQnLkra2BtGKup_kDiZGkCkrbUS_fENJm7yuavWYrUWiTM",
      imgIcon: "database",
      buttonText: "Publishing Soon",
      buttonIcon: "hourglass_top",
      primaryBtn: false,
      comingSoon: true
    }
  ];

  return (
    <section id="rd" className="bg-dark-base py-20 px-4 md:px-10">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight">
            Research & <span className="text-primary">Development</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Exploring new frontiers in software engineering through patents, publications, and open-source contributions.
          </p>
        </motion.div>

        {/* Content List */}
        <div className="flex flex-col gap-8">
          {rdItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl bg-surface p-6 md:p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center relative z-10">
                
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${item.iconColor} text-[22px]`}>{item.icon}</span>
                    <span className={`${item.badgeColor} px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/5`}>
                      {item.type}
                    </span>
                    {item.comingSoon && (
                      <span className="flex items-center gap-1.5 bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        Publishing Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {item.details ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 px-6 rounded-2xl bg-dark-base/50 border border-white/5">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx}>
                          <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">{detail.label}</span>
                          <span className="text-sm font-bold text-text-primary">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-text-secondary leading-relaxed max-w-xl italic">
                      {item.description}
                    </p>
                  )}

                  {item.buttonLink ? (
                    <motion.a
                      href={item.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-sm font-bold transition-all w-fit shadow-lg
                        ${item.primaryBtn
                          ? 'bg-primary text-white shadow-primary/20 hover:bg-primary-hover'
                          : 'bg-surface border border-white/10 text-text-primary hover:bg-white/5'}`}
                    >
                      <span>{item.buttonText}</span>
                      <span className="material-symbols-outlined text-[18px]">{item.buttonIcon}</span>
                    </motion.a>
                  ) : item.comingSoon ? (
                    <button disabled className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-sm font-bold w-fit shadow-lg bg-surface border border-white/5 text-text-secondary/50 cursor-not-allowed">
                      <span>{item.buttonText}</span>
                      <span className="material-symbols-outlined text-[18px]">{item.buttonIcon}</span>
                    </button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-sm font-bold transition-all w-fit shadow-lg
                        ${item.primaryBtn
                          ? 'bg-primary text-white shadow-primary/20 hover:bg-primary-hover'
                          : 'bg-surface border border-white/10 text-text-primary hover:bg-white/5'}`}
                    >
                      <span>{item.buttonText}</span>
                      <span className="material-symbols-outlined text-[18px]">{item.buttonIcon}</span>
                    </motion.button>
                  )}
                </div>

                {/* Visual Preview */}
                <div className="w-full lg:w-[320px] aspect-video rounded-2xl overflow-hidden bg-dark-base relative flex-shrink-0 shadow-2xl border border-white/10">
                  <div className={`absolute inset-0 z-10 opacity-60 bg-gradient-to-br ${item.primaryBtn ? 'from-primary/80 to-black' : 'from-emerald-900/80 to-black'}`} />
                  <div className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-white/20 text-7xl">{item.imgIcon}</span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Subtle Background Text */}
              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] select-none pointer-events-none">
                {item.type.split(' ')[0]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAndDevelopment;