/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    title="Home"
    description="Leyao (Lia) Tan's personal website"
  >
    <div className="site-page home-page">
      <div className="home-grid">
        <aside className="profile-column">
          <img
            className="profile-image"
            src={`${PUBLIC_URL}/images/site/profile.jpg`}
            alt="Leyao Tan"
          />
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:leyao.tan@sauder.ubc.ca">Email</a>
            <a href="https://www.linkedin.com/in/leyaotan/">LinkedIn</a>
          </div>
        </aside>
        <div className="home-copy">
          <p>Hi! I am Leyao. I am a Ph.D. student in Quantitative Marketing at Sauder Business School, University of British Columbia (UBC).</p>
          <p>My research aims to use cutting-edge methods in probabilistic machine learning, text analysis, and causal inference to help firms and online platforms address the platform-governance and sustainability challenges in the age of AI.</p>
          <p>My recent work focuses on how Bayesian nonparametric Gaussian process methods can enable effective causal inference when no control group is available; how graph neural networks can identify fake reviews on online shopping platforms; and how large language models can measure firms&apos; risk exposure from earnings-call text. You can read more about my research <Link to="/research">here</Link>.</p>
          <p>I also hold a Master of Science in Business Administration (Quant Marketing) from Antai College of Economics and Management, Shanghai Jiao Tong University (SJTU) and a bachelor&apos;s degree from Renmin University of China (RUC).</p>
        </div>
      </div>

      <div className="interest-grid">
        <section className="soft-section">
          <h2>Substantive interests</h2>
          <p>Digital platforms, platform governance, WOM, consumer choice, climate risk, and sustainability.</p>
        </section>
        <section className="soft-section">
          <h2>Methodological interests</h2>
          <p>Bayesian probabilistic modeling, Bayesian nonparametrics, machine learning, large language models, graph learning, and text analysis.</p>
        </section>
      </div>
    </div>
  </Main>
);

export default Index;
