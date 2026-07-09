import React from 'react';
import { PROJECTS } from '../data/portfolioData.js';
import ProjectRow from './ProjectRow.jsx';

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="cmd">
        <span className="user">harish</span>
        <span className="sep">@portfolio:~$</span>{' '}
        <span className="command">ls -la projects/</span>
      </div>
      <h2 className="section-title">Projects</h2>
      <div className="filelist" id="fileList">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
