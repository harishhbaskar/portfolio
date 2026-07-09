import React from 'react';
import CommandConsole from './CommandConsole.jsx';

const Hero = () => {
  return (
    <section className="hero" style={{ borderBottom: '1px solid var(--border-dim)' }}>
      <div className="prompt-line">
        <span className="user">harish</span>
        <span className="sep">@</span>portfolio<span className="sep">:~$</span> whoami
      </div>
      <div className="hero-out">
        <div className="line">
          <span className="hero-name">Harish&nbsp;B</span>
        </div>
        <div className="line">
          <span className="hero-role">
            Full-Stack Developer <span className="accent">/</span> React <span className="accent">·</span> React Native <span className="accent">·</span> Node.js
          </span>
        </div>
        <div className="line">
          <span className="hero-loc" style={{ color: 'var(--text)', marginTop: '6px', display: 'block' }}>
            Full-stack developer with hands-on experience building scalable web and mobile applications using React, React Native, Node.js, Express, and modern database technologies. Focused on writing maintainable code, designing reliable APIs, and delivering complete products from frontend to backend.
          </span>
        </div>
      </div>

      <CommandConsole />

      <div className="scroll-hint">
        try commands like <b>stack</b>, <b>experience</b>, <b>projects</b>, <b>now</b> — or just scroll ↓
      </div>
    </section>
  );
};

export default Hero;
