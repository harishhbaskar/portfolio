import React from 'react';
import { NOW_FOCUS } from '../data/portfolioData.js';

const NowSection = () => {
  return (
    <section id="now">
      <div className="cmd">
        <span className="user">harish</span>
        <span className="sep">@portfolio:~$</span>{' '}
        <span className="command">cat now.md</span>
      </div>
      <h2 className="section-title">Currently Building & Exploring</h2>
      <div className="md-card">
        <h3>{NOW_FOCUS.title}</h3>
        <p>{NOW_FOCUS.subtitle}</p>
        <ul>
          {NOW_FOCUS.points.map((pt, idx) => (
            <li key={idx}>
              <b>{pt.bold}</b> {pt.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NowSection;
