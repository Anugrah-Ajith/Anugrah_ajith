import React from 'react';
import { motion } from 'framer-motion';
import { programming, machineLearning, backend, frontend, databases, tools } from '../data/skills';
import { Code, Brain, Server, LayoutPanelTop, Database, GitBranch } from 'lucide-react';

const skillCategories = [
  { title: 'AI & Machine Learning', icon: <Brain size={20} />, items: machineLearning, color: 'text-lime-400', badge: 'Internship Experience' },
  { title: 'Backend & APIs', icon: <Server size={20} />, items: backend, color: 'text-emerald-400' },
  { title: 'Programming Languages', icon: <Code size={20} />, items: programming, color: 'text-cyan-400' },
  { title: 'Frontend Development', icon: <LayoutPanelTop size={20} />, items: frontend, color: 'text-violet-400' },
  { title: 'Databases & Storage', icon: <Database size={20} />, items: databases, color: 'text-amber-400' },
  { title: 'DevOps & Tools', icon: <GitBranch size={20} />, items: tools, color: 'text-rose-400' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0b0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
            TECHNICAL ARSENAL<span className="text-lime-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Hands-on machine learning, backend engineering, and web development skills utilized in active industry work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className={`p-6 rounded-2xl bg-[#121418] border transition-all duration-300 group ${
                cat.badge ? 'border-lime-400/30 ring-1 ring-lime-400/20' : 'border-white/5 hover:border-lime-400/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${cat.color} group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{cat.title}</h3>
                </div>
                {cat.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lime-400/15 text-lime-300 border border-lime-400/30">
                    {cat.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300 text-xs font-medium hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
