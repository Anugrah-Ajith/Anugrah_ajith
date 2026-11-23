import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.projectType || !form.description) {
      setError('Please fill in all required fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validate()) return;
    setLoading(true);
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Network response was not ok');
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      setSuccess(true);
      setForm({ name: '', email: '', projectType: '', budget: '', description: '' });
    } catch {
      setError('Something went wrong. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0c0e] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mb-4">
            LET&apos;S BUILD SOMETHING GREAT<span className="text-lime-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have an idea, need freelance development, or want to explore full-time opportunities? Send a message or connect directly.
          </p>
        </div>

        <motion.div
          className="rounded-3xl p-8 sm:p-10 bg-[#121418] border border-white/5 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Your Name <span className="text-lime-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:bg-white/[0.05] transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Email Address <span className="text-lime-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:bg-white/[0.05] transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Project Type <span className="text-lime-400">*</span>
                </label>
                <input
                  type="text"
                  name="projectType"
                  placeholder="e.g. Web App / Website / API"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:bg-white/[0.05] transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Budget (Optional)
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g. $1,000 - $3,000"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Project Details <span className="text-lime-400">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Tell me about your project, goals, and timeline..."
                rows={4}
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:bg-white/[0.05] transition-all text-sm resize-none"
                required
              />
            </div>

            {error && <p className="text-rose-400 text-xs">{error}</p>}
            {success && (
              <div className="flex items-center space-x-2 text-lime-400 text-xs">
                <CheckCircle2 size={16} />
                <span>Message received! I&apos;ll get back to you shortly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-lime-400 text-black font-bold text-sm uppercase tracking-wider hover:bg-lime-300 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>

          {/* Alternative direct actions */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919847017695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-lime-400/40 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
            >
              <Phone size={14} className="text-lime-400" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="mailto:anugrahajith4@gmail.com"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-lime-400/40 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
            >
              <Mail size={14} className="text-lime-400" />
              <span>anugrahajith4@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
