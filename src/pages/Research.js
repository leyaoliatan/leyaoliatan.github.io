/* eslint-disable max-len */
import React from 'react';

import Main from '../layouts/Main';

const Research = () => (
  <Main title="Research" description="Research by Leyao Tan">
    <div className="site-page academic-page">
      <section className="academic-section">
        <h1 className="section-title">Working Paper</h1>
        <article className="paper-entry">
          <h2>Measuring Corporate Risk Using Large Language Model Embeddings: Evidence on Corporate Climate Risk and Supply Chain Restructuring</h2>
          <p>Leyao Tan, Cyndia Wang, Jiong Sun, and Yi Qian</p>
          <p className="entry-meta">Presented at the 2025 ISMS Marketing Science Conference; 2026 UBC MBS PhD WIP Seminar; 36th Annual POMS Conference; AIMOR @ Banff 2026 Workshop; 2026 ISMS Marketing Science Conference; BizAI Conference; and AAA Global Connect 2026.</p>
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6507162">SSRN working paper</a>
        </article>
      </section>

      <section className="academic-section">
        <h1 className="section-title">Selected Research in Progress</h1>
        <article className="paper-entry">
          <h2>A Bayesian Nonparametric Approach to Inferring Event Effects Using Cohorted Data</h2>
          <p>Shin Oblander and Leyao Tan</p>
          <p className="entry-meta">Presented at the 2025 Annual UBC/UW Marketing Conference; 2026 Marketing Dynamics Conference; 2025 Joint Statistical Meetings; and 2026 ISMS Marketing Science Conference.</p>
        </article>
        <article className="paper-entry">
          <h2>Detecting Coordinated Manipulation on Digital Platforms: A Community-Aware Active Graph Learning Approach</h2>
          <p>Leyao Tan, Jianwei Wang, Kaixin Liu, Kai Wang, and Shuo Zhang</p>
          <p className="entry-meta">Presented at the 2025 ISMS Marketing Science Conference; 2025 Conference on Artificial Intelligence, Machine Learning, and Business Analytics at Columbia University; and 2026 ISMS Marketing Science Conference.</p>
        </article>
      </section>
    </div>
  </Main>
);

export default Research;
