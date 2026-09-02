import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);

export const useScrollTo = () => {
  const lenisRef = useLenis();

  return (target, options = {}) => {
    const lenis = lenisRef?.current;

    if (typeof target === 'number') {
      if (lenis) lenis.scrollTo(target, { duration: 1.2, ...options });
      else window.scrollTo({ top: target, behavior: 'smooth' });
      return;
    }

    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    if (lenis) {
      lenis.scrollTo(el, { offset: -84, duration: 1.2, ...options });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
};
