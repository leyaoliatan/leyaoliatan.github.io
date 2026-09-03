import React from 'react';

import Main from '../layouts/Main';

const Teaching = () => (
  <Main title="Teaching" description="Teaching experience of Leyao Tan">
    <div className="site-page academic-page">
      <section className="academic-section">
        <h1 className="section-title">Instructor</h1>
        <div className="entry-row teaching-row">
          <div>
            <h2>COMM 365 203: Market Research (assigned)</h2>
            <p>Sauder School of Business, University of British Columbia</p>
          </div>
          <p className="period">Winter Term 2, 2026–27</p>
        </div>
      </section>

      <section className="academic-section">
        <h1 className="section-title">Teaching Assistantships</h1>
        <div className="entry-row teaching-row">
          <div><h2>BAMA 508: Marketing Research</h2><p>Teaching Assistant</p></div>
          <p className="period">W2 2023–24; Summer 2024; Summer 2025; W2 2025–26; Summer 2026</p>
        </div>
        <div className="entry-row teaching-row">
          <div><h2>COMM 365: Market Research</h2><p>Teaching Assistant</p></div>
          <p className="period">W2 2024–25; W2 2025–26</p>
        </div>
        <div className="entry-row teaching-row">
          <div><h2>BAIT 617: Data Visualization</h2><p>Teaching Assistant</p></div>
          <p className="period">W1 2025–26</p>
        </div>
        <div className="entry-row teaching-row">
          <div><h2>BAMA 517: Data Driven Marketing</h2><p>Teaching Assistant</p></div>
          <p className="period">W1 2025–26</p>
        </div>
      </section>
    </div>
  </Main>
);

export default Teaching;
