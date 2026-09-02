import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let frame = null;
    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty('--x', `${e.clientX}px`);
          ref.current.style.setProperty('--y', `${e.clientY}px`);
        }
        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-20 hidden lg:block pointer-events-none transition-opacity duration-500"
      style={{
        background: 'radial-gradient(560px circle at var(--x, 50%) var(--y, 50%), rgba(97,86,226,0.10), rgba(0,209,255,0.05) 35%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
