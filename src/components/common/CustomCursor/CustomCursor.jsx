import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [role="button"], .cursor-interactive';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 260, damping: 22, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 260, damping: 22, mass: 0.4 });

  const rafRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) document.documentElement.classList.add('reduce-motion');
    if (!isFinePointer || reduceMotion) return;

    setEnabled(true);

    const handleMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        rafRef.current = null;
      });
    };

    const handleOver = (e) => {
      setIsHovering(Boolean(e.target.closest(INTERACTIVE_SELECTOR)));
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Core dot — snaps instantly to the pointer */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPressed ? 6 : 8,
          height: isPressed ? 6 : 8,
        }}
      />
      {/* Trailing ring — eases toward the pointer, expands on hover */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border border-primary/70"
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHovering ? 0.9 : 0.5,
          backgroundColor: isHovering ? 'rgba(97,86,226,0.12)' : 'rgba(97,86,226,0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
