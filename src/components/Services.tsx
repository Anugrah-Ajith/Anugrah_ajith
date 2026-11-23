import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Server, RefreshCw, Layers, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    icon: <Globe size={22} />,
    description: 'Bespoke, high-converting websites designed for startups, local businesses, and modern agencies.',
  },
  {
    title: 'Full‑Stack Web Apps',
    icon: <Layers size={22} />,
    description: 'End-to-end web applications complete with interactive UI, authenticated backends, and robust data models.',
  },
  {
    title: 'Python & Django Backends',
    icon: <Server size={22} />,
    description: 'Clean REST APIs, asynchronous tasks, database optimization, and secure business logic.',
  },
  {
    title: 'Frontend Engineering',
    icon: <Layout size={22} />,
    description: 'Pixel-perfect, fluid web interfaces built using React, TypeScript, and modern Tailwind CSS.',
  },
  {
    title: 'Website Redesigns',
    icon: <RefreshCw size={22} />,
    description: 'Upgrading sluggish or outdated websites into fast, responsive, modern digital storefronts.',
  },
  {
    title: 'Maintenance & Support',
    icon: <Wrench size={22} />,
    description: 'Bug fixing, feature enhancements, database migrations, and long-term technical reliability.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0e1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
            SERVICES &amp; EXPERTISE<span className="text-lime-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            From technical prototyping to full-scale web product delivery, tailored for quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              className="p-7 rounded-2xl bg-[#13151b] border border-white/5 hover:border-lime-400/30 transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-lime-400 flex items-center justify-center mb-5 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">{svc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20"
          >
            <span>Have a Project in Mind? Let&apos;s Discuss It</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
