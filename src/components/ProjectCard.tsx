// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

interface Props {
  project: Project;
  /** position relative to active slide: 0 = active, -1 = left, 1 = right */
  position: number;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, position, onSelect }) => {
  const isActive = position === 0;

  // Responsive offsets handled cleanly with motion variants
  const variants = {
    active: {
      x: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 25,
      filter: 'brightness(1)',
      pointerEvents: 'auto' as const,
    },
    left: {
      x: '-55%',
      scale: 0.85,
      rotateY: 22,
      opacity: 0.65,
      zIndex: 10,
      filter: 'brightness(0.75)',
      pointerEvents: 'auto' as const,
    },
    right: {
      x: '55%',
      scale: 0.85,
      rotateY: -22,
      opacity: 0.65,
      zIndex: 10,
      filter: 'brightness(0.75)',
      pointerEvents: 'auto' as const,
    },
    hidden: {
      x: 0,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none' as const,
    },
  };

  const currentVariant =
    position === 0 ? 'active' : position === -1 ? 'left' : position === 1 ? 'right' : 'hidden';

  return (
    <motion.div
      className="preserve-3d cursor-pointer absolute top-1/2 -translate-y-1/2 w-[310px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#111317]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.8)] hover:border-lime-400/40 transition-colors duration-300 overflow-hidden flex flex-col justify-between"
      style={{
        transformOrigin: 'center center',
      }}
      variants={variants}
      animate={currentVariant}
      initial="hidden"
      transition={{ type: 'spring', stiffness: 180, damping: 24 }}
      onClick={() => onSelect(project)}
      whileHover={isActive ? { y: '-52%', scale: 1.02 } : {}}
    >
      {/* High-fidelity Thumbnail Art Area */}
      <div className="relative h-48 sm:h-52 w-full border-b border-white/10 overflow-hidden group">
        <ProjectThumbnail projectTitle={project.title} />

        {/* Hover overlay hint on active card */}
        {isActive && (
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lime-400 text-black px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
            <span>Explore</span>
            <ArrowUpRight size={12} />
          </div>
        )}
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111317] to-[#0c0d10]">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-lime-400 px-2.5 py-0.5 rounded-full bg-lime-400/10 border border-lime-400/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-lime-300 transition-colors line-clamp-1 mb-2">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[10px] sm:text-[11px] font-medium text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-[10px] text-zinc-500 font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
