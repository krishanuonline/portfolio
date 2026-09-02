import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WHATSAPP_NUMBER = '918609801667';

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setForm({ name: '', email: '', phone: '', message: '' });
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      `Hi Krishanu, I'm ${form.name}.`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      '',
      form.message
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-base/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-surface border border-white/10 shadow-2xl p-6 md:p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close contact form"
              className="absolute top-5 right-5 flex items-center justify-center size-9 rounded-full bg-dark-base text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Header */}
            <div className="flex flex-col gap-2 mb-6 pr-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span className="text-xs font-black uppercase tracking-widest">Let's Connect</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Send me a message</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Fill in your details below — it'll open WhatsApp with your message ready to send straight to me.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="h-12 px-4 rounded-xl bg-dark-base border border-white/10 text-text-primary placeholder:text-text-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="h-12 px-4 rounded-xl bg-dark-base border border-white/10 text-text-primary placeholder:text-text-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12 px-4 rounded-xl bg-dark-base border border-white/10 text-text-primary placeholder:text-text-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you'd like to discuss..."
                  className="px-4 py-3 rounded-xl bg-dark-base border border-white/10 text-text-primary placeholder:text-text-secondary/50 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition-all"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 flex items-center justify-center gap-2 h-14 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/30 hover:brightness-110 transition-all"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.35.657 4.55 1.8 6.42L4 29l7.77-1.76A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.8 9.8 0 0 1-5.01-1.373l-.359-.213-4.61 1.045 1.023-4.5-.234-.37A9.78 9.78 0 0 1 5.2 15c0-5.965 4.84-10.818 10.804-10.818S26.808 9.035 26.808 15 21.968 24.818 16.004 24.818Zm5.61-7.42c-.307-.154-1.818-.897-2.1-1-.282-.103-.487-.154-.692.154-.205.308-.795 1-.975 1.205-.18.205-.36.231-.667.077-.307-.154-1.296-.478-2.469-1.523-.912-.813-1.528-1.817-1.707-2.124-.18-.308-.019-.474.135-.628.138-.138.307-.36.461-.539.154-.18.205-.308.307-.513.103-.205.051-.385-.026-.539-.077-.154-.692-1.667-.949-2.283-.25-.6-.505-.519-.692-.529l-.59-.01a1.13 1.13 0 0 0-.821.385c-.282.308-1.077 1.052-1.077 2.565s1.103 2.975 1.257 3.18c.154.205 2.172 3.318 5.264 4.654.735.317 1.309.507 1.756.649.738.235 1.41.202 1.941.122.592-.088 1.818-.744 2.075-1.462.257-.718.257-1.334.18-1.462-.077-.128-.282-.205-.59-.36Z"/>
                </svg>
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
