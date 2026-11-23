import React from 'react';
import portrait from '../assets/portrait.png';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Python & Django backend architecture',
  'RESTful API design & third-party integrations',
  'Modern frontend development with React, TypeScript & Tailwind',
  'Database schema design (PostgreSQL, MySQL, SQLite)',
  'Specialization in AI, Machine Learning & Robotics concepts',
  'End-to-end full-stack deployment and performance optimization',
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e1014] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#14161b]">
              <img
                src={portrait}
                alt="Anugrah Ajith"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-center">
                <span className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                  Driven by Engineering &amp; Design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-6 leading-tight">
              BEYOND THE CODE<span className="text-lime-400">.</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
              I am a BCA graduate specializing in <span className="text-white font-semibold">Artificial Intelligence, Machine Learning, Robotics, and IoT</span>. I bridge the gap between technical engineering and intuitive user experience.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether building resilient Django backend APIs, crafting interactive React user interfaces, or solving intricate database challenges, I focus on clean code, maintainability, and measurable impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 size={17} className="text-lime-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 w-full">
              <p className="text-zinc-400 text-xs sm:text-sm italic">
                &ldquo;Great software is not just about writing code. It&apos;s about understanding core business problems, designing thoughtful architecture, and delivering products people genuinely enjoy using.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
