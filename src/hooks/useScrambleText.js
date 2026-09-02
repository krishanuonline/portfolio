import { useEffect, useState } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}=+*^?#';

export function useScrambleText(finalText, play, { revealDelay = 2, holdFrames = 6 } = {}) {
  const [display, setDisplay] = useState(finalText);

  useEffect(() => {
    if (!play) {
      setDisplay(finalText);
      return;
    }

    let frame = 0;
    let rafId;

    const queue = finalText.split('').map((char, i) => ({
      char,
      start: i * revealDelay,
      end: i * revealDelay + holdFrames,
    }));
    const totalFrames = Math.max(...queue.map((q) => q.end)) + 1;

    const tick = () => {
      let output = '';
      let settled = 0;

      for (const q of queue) {
        if (char_is_space(q.char)) {
          output += q.char;
          settled++;
        } else if (frame >= q.end) {
          output += q.char;
          settled++;
        } else if (frame >= q.start) {
          output += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        } else {
          output += '';
        }
      }

      setDisplay(output);

      if (settled < queue.length && frame < totalFrames) {
        frame++;
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(finalText);
      }
    };

    function char_is_space(c) {
      return c === ' ';
    }

    tick();
    return () => cancelAnimationFrame(rafId);
  }, [play, finalText, revealDelay, holdFrames]);

  return display;
}
