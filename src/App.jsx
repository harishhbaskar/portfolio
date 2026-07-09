import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StackSection from './components/StackSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import NowSection from './components/NowSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="wrap">
        <Hero />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <NowSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}