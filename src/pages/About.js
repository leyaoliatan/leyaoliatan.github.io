import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import Timeline from '../components/Timeline/Timeline';
import Personal from '../components/Stats/Personal';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn More about Me">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <div className="timeline-wrapper">
          <h3 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#333',
          }}
          >
            My Journey
          </h3>
          <Timeline />
        </div>
        <div className="markdown-content" style={{ marginTop: '3rem' }}>
          <Markdown>{markdown}</Markdown>
        </div>
        <Personal />
      </article>
    </Main>
  );
};

export default About;
