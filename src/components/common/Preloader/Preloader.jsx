import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MIN_DISPLAY_MS = 700;
const MAX_WAIT_MS = 6000;

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const minTime = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS));
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });
    const hardTimeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([Promise.all([minTime, pageLoad]), hardTimeout]).then(() => {
      setLoading(false);
      document.body.style.overflow = '';
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-6 bg-dark-base"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-primary shadow-lg shadow-primary/30"
          >
            <img src="/images/icon.png" alt="Krishanu Mandal" className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-text-primary font-bold tracking-widest text-xs uppercase">
              Krishanu Mandal
            </p>
            <div className="relative w-40 h-1 rounded-full bg-surface overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-primary to-accent"
                animate={{ left: ['-33%', '100%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
