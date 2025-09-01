import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/projects';

const Projects = () => (
  <Main title="Work in Progress">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h3>
            <Link to="/projects">Selected Research in Progress</Link>
          </h3>
        </div>
      </header>
      <div className="projects-content">
        {data.map((project) => (
          <div key={project.title} style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              {project.title}
              {project.subtitle && (
                <span style={{ fontWeight: 'normal', fontSize: '0.9em' }}>
                  {project.subtitle}
                </span>
              )}
            </h3>
            <p style={{ fontStyle: 'italic', margin: '0' }}>
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
