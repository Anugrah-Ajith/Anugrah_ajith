import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0b0c0e] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
            EXPERIENCE<span className="text-lime-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Professional background, hands-on software development, and technical responsibilities.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl bg-[#121418] border border-white/5 hover:border-lime-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-lime-400/10 text-lime-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">{exp.position}</h3>
                    <p className="text-lime-400 text-sm font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs text-zinc-400">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-zinc-300 text-sm leading-relaxed flex items-start space-x-2">
                      <span className="text-lime-400 font-bold mr-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
