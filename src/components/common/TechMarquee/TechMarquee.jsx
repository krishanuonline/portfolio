import React from 'react';

const stack = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
  'Docker', 'Microservices', 'React Native', 'Express.js', 'MongoDB',
  'GitHub Actions', 'System Design'
];

const TechMarquee = () => {
  const items = [...stack, ...stack];

  return (
    <div className="relative bg-surface/40 border-y border-white/5 py-5 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-dark-base), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-dark-base), transparent)' }}
      />

      <div className="flex w-max animate-marquee">
        {items.map((tech, i) => (
          <div key={`${tech}-${i}`} className="flex items-center gap-3 px-6 shrink-0">
            <span className="text-text-secondary/80 text-sm font-bold uppercase tracking-widest whitespace-nowrap">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
