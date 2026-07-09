import React from 'react';
import { EXPERIENCE } from '../data/portfolioData.js';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="cmd">
        <span className="user">harish</span>
        <span className="sep">@portfolio:~$</span>{' '}
        <span className="command">tail -f experience.log</span>
      </div>
      <h2 className="section-title">Experience</h2>
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="log-entry">
          <div className="log-top">
            <span className="log-role">{exp.role}</span>
            {exp.status === 'ACTIVE' && (
              <span className="badge">
                <span className="pulse"></span>ACTIVE
              </span>
            )}
          </div>
          <div className="log-meta">{exp.meta}</div>
          <ul className="log-list">
            {exp.points.map((pt, pIdx) => (
              <li key={pIdx}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
