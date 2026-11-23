// src/components/Projects.tsx
import React from 'react';
import Carousel3D from './Carousel3D';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0e1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
            FEATURED PROJECTS<span className="text-lime-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Production systems, full-stack applications, and problem-solving software engineered from concept to launch.
          </p>
        </div>
        {/* New 3D Carousel */}
        <Carousel3D />
      </div>
    </section>
  );
};

export default Projects;
