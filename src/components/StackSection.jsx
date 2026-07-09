import React from 'react';
import { TECH_STACK } from '../data/portfolioData.js';

const StackSection = () => {
  const formatArray = (arr) => `[${arr.map(i => `"${i}"`).join(', ')}]`;

  const keys = Object.keys(TECH_STACK);

  return (
    <section id="stack">
      <div className="cmd">
        <span className="user">harish</span>
        <span className="sep">@portfolio:~$</span>{' '}
        <span className="command">cat stack.json</span>
      </div>
      <h2 className="section-title">Tech Stack</h2>
      <div className="json">
        <div className="brace">{'{'}</div>
        {keys.map((key, idx) => (
          <div key={key} className="row">
            <span className="key">"{key}"</span>: <span className="val">{formatArray(TECH_STACK[key])}</span>
            {idx < keys.length - 1 ? ',' : ''}
          </div>
        ))}
        <div className="brace">{'}'}</div>
      </div>
    </section>
  );
};

export default StackSection;
