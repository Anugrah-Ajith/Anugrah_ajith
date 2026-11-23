import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#08090b] text-zinc-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-lime-400 flex items-center justify-center font-bold text-black font-display text-xs">
              AA
            </div>
            <span className="font-display font-bold text-white text-base">
              Anugrah Ajith
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            Crafting digital products with engineering precision &copy; {year}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <a
            href="https://www.linkedin.com/in/anugrah-ajith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-lime-400 transition-colors flex items-center space-x-1"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Anugrah-Ajith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-lime-400 transition-colors flex items-center space-x-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:anugrahajith4@gmail.com"
            className="text-zinc-400 hover:text-lime-400 transition-colors flex items-center space-x-1"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>

        <button
          onClick={scrollTop}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-lime-400 transition-all border border-white/5"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
