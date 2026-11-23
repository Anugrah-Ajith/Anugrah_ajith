// src/components/Carousel3D.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

const Carousel3D: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState<null | typeof projects[0]>(null);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % projects.length);
  }, []);
  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  // Auto-rotate effect
  useEffect(() => {
    if (isPaused) return undefined;
    const id = setInterval(() => {
      next();
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  // Drag/swipe handling via framer-motion
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 60; // px
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
  };

  return (
    <section
      className="relative w-full max-w-6xl mx-auto perspective-1000 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation arrows */}
      <button
        aria-label="Previous project"
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 text-white transition-all duration-300 shadow-xl backdrop-blur-md"
        onClick={prev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next project"
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 text-white transition-all duration-300 shadow-xl backdrop-blur-md"
        onClick={next}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards container: Centered flexbox viewport */}
      <div className="relative w-full h-[450px] flex items-center justify-center overflow-visible">
        {projects.map((proj, idx) => {
          let position: number | null = null;
          if (idx === activeIndex) position = 0; // center
          else if (idx === (activeIndex - 1 + projects.length) % projects.length) position = -1; // left
          else if (idx === (activeIndex + 1) % projects.length) position = 1; // right
          else return null;

          return (
            <ProjectCard
              key={proj.title}
              project={proj}
              position={position}
              onSelect={setSelected}
            />
          );
        })}

        {/* Drag overlay across the cards area */}
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing z-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          dragElastic={0.2}
        />
      </div>

      {/* Modal for active project details */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Carousel3D;
