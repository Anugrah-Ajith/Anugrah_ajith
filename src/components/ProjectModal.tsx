// src/components/ProjectModal.tsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalLink, Github, X, CheckCircle2 } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

interface Props {
  project: Project;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '20px', opacity: 0, scale: 0.95 },
  visible: { y: '0px', opacity: 1, scale: 1 },
};

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-[#111317] border border-white/10 rounded-2xl max-w-2xl w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          ref={modalRef}
        >
          {/* Header thumbnail art preview */}
          <div className="relative h-48 sm:h-56 w-full border-b border-white/10 shrink-0">
            <ProjectThumbnail projectTitle={project.title} />
            <button
              aria-label="Close"
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black text-zinc-300 transition-colors border border-white/10 backdrop-blur-sm"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                {project.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {project.title}
              </h2>
            </div>

            <div>
              <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-wider mb-2">Overview</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-wider mb-3">Key Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/[0.03] border border-white/5 rounded-xl p-3">
                    <CheckCircle2 size={16} className="text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300 leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-wider mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links / Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-all hover:border-white/20"
                >
                  <Github size={18} /> View Source Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                >
                  <ExternalLink size={18} /> Launch Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
