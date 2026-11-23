import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const isDark = saved === 'dark';
      setDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          className="cursor-pointer flex items-center space-x-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center font-bold text-black font-display tracking-tight text-lg shadow-md group-hover:scale-105 transition-transform">
            AA
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:inline-block text-white">
            Anugrah<span className="text-lime-400">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-zinc-300 hover:text-lime-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-lime-400 hover:border-lime-400/40 transition-all"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="/ANUGRAH_AJITH_Resume.pdf"
            download="Anugrah_Ajith_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-lime-400 text-black hover:bg-lime-300 transition-colors shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0e1014] border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-zinc-300 hover:text-lime-400 py-2 text-base font-medium tracking-wide uppercase transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="/ANUGRAH_AJITH_Resume.pdf"
                  download="Anugrah_Ajith_Resume.pdf"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-lime-400 text-black font-semibold text-sm uppercase tracking-wider"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
