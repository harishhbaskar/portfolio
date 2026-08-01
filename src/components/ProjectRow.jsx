import React, { useState } from 'react';

const ProjectRow = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <>
      <div
        className="file-row"
        tabIndex="0"
        role="button"
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <span className="file-perm">{project.perm}</span>
        <span className="file-name">
          {project.filename}
          <span className="ext">{project.ext}</span>
        </span>
        <span className="file-toggle">{isOpen ? '›' : '⌄'}</span>
      </div>
      <div className={`file-detail ${isOpen ? 'open' : ''}`}>
        <div className="file-detail-inner">
          <div style={{ color: '#f2f2ef', fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
            {project.title}
          </div>
          <div style={{ color: 'var(--text-dim)', fontSize: '13.5px', marginBottom: '14px' }}>
            {project.description}
          </div>

          <div className="proj-subtitle">Problem Solved</div>
          <p style={{ color: 'var(--text)', fontSize: '13.5px', marginBottom: '12px' }}>
            {project.problem}
          </p>

          <div className="proj-subtitle">Key Features</div>
          <ul className="file-desc">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          {project.technical && project.technical.length > 0 && (
            <>
              <div className="proj-subtitle">Technical Implementation</div>
              <ul className="file-desc">
                {project.technical.map((techItem, idx) => (
                  <li key={idx}>{techItem}</li>
                ))}
              </ul>
            </>
          )}

          <div className="stack" style={{ marginTop: '14px' }}>
            {project.stack.map((item, idx) => (
              <span key={idx} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="btn-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                <span>↗</span> GitHub Repo
              </a>
            )}
            {/* {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                <span>↗</span> Live Demo
              </a>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectRow;
