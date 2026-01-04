import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      title: "PHP with Laravel",
      issuer: "Udemy",
      type: "Backend",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QRzDwtn-kRWEF86H_u5yL_25iKX8qM7sD2bRBBB6aZdtPiA1CL3xHehZEowUG5mJjQMJY5AXgrvk3o2MMecsnMMBwVZu9Fp-d4839B26JAVzJs90gfImgkSB9DmyxBTLkF6-Cp-HRj3zZ_vBtu1N0DFTESpnlpxv7XRyzorCCuK7dgxgO-StX7EAp-jW_eRnBFVJlFIo8rXmbzDyKubvNeKyM1wEw7yiGxfx9oe8Dyh7qXNDqdEro78hz_lo1CXV6B40VKg1Ss-b",
      icon: "school",
      link: "#"
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      type: "Full Stack",
      stack: "MongoDB, ExpressJS, React, NodeJS, SQL, Docker",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATzpvjIwa6-MD16E1MlhdNZ6AfOq6mENJBOC4qV78KA0hjhA21qUxnOEXAnZVvxoJ0GLZ9RxiWKXYjwH3FB09Uinp7vV7inYnKm9PGF2IX3cI_BV4dqHhee-NXFcolpP4uDb21Ja3L6CGP8NYgFdQBbgIq-SzCQS_M6r_jRQ_w3ELbT6uW7cfrdXDGFqeSisU21PCkVpQ9BALUm2XkUyrjnjven0C9FmJNykGPGiqRahoOaSHvAgxV3X_xx2aumdGuSFOV0oIw4MnO",
      icon: "school",
      link: "#"
    },
    {
      title: "ReactJS with Redux",
      issuer: "NamasteDev",
      type: "Frontend",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsfl_ukTBWrbtvTMAa3BkOuHFwHvGWs0jzcVyVrLa7xVkQQ23MVn9T_2PSeW9kvVr0GGanGqDb4lML6ZUgVghE4R-YpJKd6QRsRFoMYa24BVurq8E6H6pDiVSUprSfdjVPfDOuIYavwzPuy5Y1DUPHKyvGiA-BPYRIA3JRhRdM_CEcmw8XdZ63WzWnCocY3r5yb2Se34XTvkE48DJ60s8RpwqSLOYnsgbOtPAjD_gCwPNlWEfRhhTGTceZSnYlyCAzUDg3YG0LfU2b",
      icon: "workspace_premium",
      link: "#"
    },
    {
      title: "Full Stack - NodeJS",
      issuer: "VAC by Brainware University",
      type: "Backend",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi-_fFDXm6liDjq8ub9uNrh56B7Pz5kZIXd-EDOMBAJaRqCHFrpd3wZHzYwR2V4nq821vruZI61G5619seJHQdpRCHttIGcDDHYq42Z9aVvi6xb5bLQ6XXKPAVebUu8uYT5avI7ijpW97a8w2ydCbEG6Dc_6bf136JSphY0jkyTqyvfEPbShcvmxZgSbuIFNOU8ZZhN1VQRRru0W4cXSdq-WIaV7dGox09l7NJb2J7q497yeLSecwa4YgF1zD0SGNvWtT0xwa3vbpM",
      icon: "account_balance",
      link: "#"
    },
    {
      title: "Learn Bootstrap",
      issuer: "Edunix",
      type: "Frontend",
      stack: "Built 10 Real-world Projects",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzU17LSbtG5BBL4r-bRgta_rHq1jPdsAsGx11STOIqobdhP8CiaRKnt5xiiM4jYcElLssGVaUAgV6pGI0D9cuwE8l-zwSAZQBoEZhFrryGMfgR4-WHmnn6ZmP4fvdqGEhYBLqgGBTNDILXFrLYOm5nKlP1RWEuBrJ8rBbCGyVaDAtiQZU2rDgRCESC2m2QZmORN2on_YkUwOqDo_Rl3WhPyrv8cb8WHseMJce-ezM9DQj87ybbXq0GPAfJVnS2x4oa1lznxLdzARYQ",
      icon: "laptop_mac",
      link: "#"
    },
    {
      title: "Diploma in IT Application",
      issuer: "NAHM",
      type: "Diploma",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKEWKEpytjnc1uzPvT3VKUG_llwW9exTLcS93iw1rJSSozmUfRMPbejjgKog2AJk3h-EhKGCTw17eHTXpQdgtrHCVuDj48XQ96RLWU5aCq2VZxV_pWYTymWPBtevzjkbvk7iZ9KfESoEnw3HSNbW2T-pIetog2qVi_caSI_pyi9RLlaEy4nODljZ9HYYJ4HRELtZx9KVacflXApjRe2eCoOebGIOraUaS37A5dIjhEDFcLI3HBmPA4YkUasKiYPbOhrgt78SN42xkP",
      icon: "verified",
      link: "#"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-surface rounded-2xl overflow-hidden border border-white/5 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Image Preview */}
              <div className="relative w-full aspect-[4/3] bg-dark-base overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent z-10" />
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    {cert.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight mb-2">
                    {cert.title}
                  </h3>
                  {cert.stack && (
                    <p className="text-xs text-text-secondary italic mb-3">
                      {cert.stack}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
                    <span className="material-symbols-outlined text-[18px] text-accent">{cert.icon}</span>
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <motion.a 
                  href={cert.link}
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/link"
                >
                  <span>View Certificate</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:animate-pulse">open_in_new</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;