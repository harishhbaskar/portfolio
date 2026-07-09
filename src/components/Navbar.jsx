import React from 'react';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot red"></span>
          </div>
          <span className="path"><b>harish</b>@portfolio:~</span>
        </div>
        <nav>
          <a href="#stack" onClick={(e) => handleScroll(e, 'stack')}>stack</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>projects</a>
          <a href="#now" onClick={(e) => handleScroll(e, 'now')}>now</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
