import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918609801667"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.4, delay: 1 },
        scale: { duration: 0.4, delay: 1, type: 'spring', stiffness: 200 },
        y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-surface border border-white/10 px-3 py-1.5 text-xs font-bold text-text-primary opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
        Chat with me
      </span>

      {/* Button */}
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 ring-1 ring-white/10">
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.35.657 4.55 1.8 6.42L4 29l7.77-1.76A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.8 9.8 0 0 1-5.01-1.373l-.359-.213-4.61 1.045 1.023-4.5-.234-.37A9.78 9.78 0 0 1 5.2 15c0-5.965 4.84-10.818 10.804-10.818S26.808 9.035 26.808 15 21.968 24.818 16.004 24.818Zm5.61-7.42c-.307-.154-1.818-.897-2.1-1-.282-.103-.487-.154-.692.154-.205.308-.795 1-.975 1.205-.18.205-.36.231-.667.077-.307-.154-1.296-.478-2.469-1.523-.912-.813-1.528-1.817-1.707-2.124-.18-.308-.019-.474.135-.628.138-.138.307-.36.461-.539.154-.18.205-.308.307-.513.103-.205.051-.385-.026-.539-.077-.154-.692-1.667-.949-2.283-.25-.6-.505-.519-.692-.529l-.59-.01a1.13 1.13 0 0 0-.821.385c-.282.308-1.077 1.052-1.077 2.565s1.103 2.975 1.257 3.18c.154.205 2.172 3.318 5.264 4.654.735.317 1.309.507 1.756.649.738.235 1.41.202 1.941.122.592-.088 1.818-.744 2.075-1.462.257-.718.257-1.334.18-1.462-.077-.128-.282-.205-.59-.36Z"/>
        </svg>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
