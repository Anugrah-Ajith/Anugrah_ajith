import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import portrait from '../assets/portrait.png';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-lime-400/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Copy */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
            </span>
            <span>Available for Hire &amp; Freelance Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08] mb-6">
            BUILDING DIGITAL EXPERIENCES THAT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400">
              MAKE AN IMPACT.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            Hello, I&apos;m <span className="text-white font-semibold">Anugrah Ajith</span>. A Full‑Stack Developer specializing in Python, Django, modern React, and AI-driven solutions built to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 group"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <span>Let&apos;s Talk</span>
            </a>
            <a
              href="/ANUGRAH_AJITH_Resume.pdf"
              download="Anugrah_Ajith_Resume.pdf"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-lime-400/30 text-lime-300 hover:bg-lime-400/10 font-semibold text-sm transition-all"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Highlights / Badges */}
          <div className="mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">BCA</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">AI &amp; Robotics Spec.</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-lime-400">Full-Stack</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Python &amp; Django</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">4+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Core Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl shadow-black/80 group">
            {/* Inner frame */}
            <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#14161b]">
              <img
                src={portrait}
                alt="Anugrah Ajith"
                className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Bottom tag inside portrait */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">Anugrah Ajith</div>
                  <div className="text-lime-400 text-xs">Full-Stack &amp; AI Developer</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-300">
                  <Sparkles size={14} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
