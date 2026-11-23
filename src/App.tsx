// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const sections = [
  { id: 'home', component: <Hero /> },
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects', component: <Projects /> },
  { id: 'experience', component: <Experience /> },
  { id: 'services', component: <Services /> },
  { id: 'contact', component: <Contact /> },
];

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-20">
          {s.component}
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default App;
