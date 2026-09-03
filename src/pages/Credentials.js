/* eslint-disable max-len */
import React from 'react';

import Main from '../layouts/Main';

const Credentials = () => (
  <Main title="Credentials" description="Education, fellowships, awards, and academic service of Leyao Tan">
    <div className="site-page academic-page credentials-page">
      <section className="academic-section">
        <h1 className="section-title">Education</h1>
        <div className="subsection">
          <div className="entry-row"><div><h2>University of British Columbia</h2><p>Ph.D. in Business Administration (Quantitative Marketing), in progress<br />Sauder School of Business</p></div><p className="period">2023–Present</p></div>
        </div>
        <div className="subsection">
          <div className="entry-row"><div><h2>Shanghai Jiao Tong University</h2><p>M.S. in Quantitative Marketing</p></div><p className="period">2020–2023</p></div>
        </div>
        <div className="subsection">
          <div className="entry-row"><div><h2>Renmin University of China</h2><p>Bachelor&apos;s in Politics, Philosophy, and Economics (PPE)</p></div><p className="period">2016–2020</p></div>
        </div>
        <div className="subsection">
          <div className="entry-row"><div><h2>Visiting Student</h2><p>Simon Fraser University, 2023<br />University of British Columbia, 2022</p></div></div>
        </div>
      </section>

      <section className="academic-section">
        <h1 className="section-title">Fellowships</h1>
        <div className="subsection">
          <h2>University of British Columbia</h2>
          <div className="entry-row"><p>Li Tze Fong Memorial Fellowship</p><p className="period">2026–27</p></div>
          <div className="entry-row"><p>Dean Earle D MacPhee Memorial Fellowship in Commerce and Business Administration</p><p className="period">2023–24, 2025–26</p></div>
          <div className="entry-row"><p>C K Choi Fellowship in Business Administration</p><p className="period">2023–24</p></div>
        </div>
      </section>

      <section className="academic-section">
        <h1 className="section-title">Awards and Honors</h1>
        <div className="subsection">
          <h2>University of British Columbia</h2>
          <div className="entry-row"><p>Sales and Marketing Executives International Charles Weinberg Research Award</p><p className="period">2023–24, 2025–26</p></div>
          <div className="entry-row"><p>Sauder Graduate Award</p><p className="period">2023–24, 2025–26</p></div>
          <div className="entry-row"><p>Climate Action Grant, UBC Sauder&apos;s Centre for Climate and Business Solutions</p><p className="period">2025</p></div>
          <div className="entry-row"><p>Business for Social Good Research Grant</p><p className="period">2024</p></div>
        </div>
        <div className="subsection">
          <h2>Shanghai Jiao Tong University</h2>
          <div className="entry-row"><p>Academic Excellence Scholarship</p><p className="period">October 2021, 2022</p></div>
          <div className="entry-row"><p>China Ocean Shipping Company Scholarship</p><p className="period">October 2021, 2022</p></div>
        </div>
        <div className="subsection">
          <h2>Renmin University of China</h2>
          <div className="entry-row"><p>Beijing Municipal Outstanding Graduate</p><p className="period">June 2020</p></div>
          <div className="entry-row"><p>National Scholarship, Ministry of Education of China</p><p className="period">December 2018, 2019</p></div>
        </div>
      </section>

      <section className="academic-section">
        <h1 className="section-title">Academic Service</h1>
        <div className="entry-row">
          <div><h2>Conference Session Organization</h2><p>Session Organizer, “From Big Data to Actionable Insights: How AI Is Transforming Analytics,” Operations Management Data Analytics: Gen AI, Machine Learning, and Data Science track, POMS Annual Conference</p></div>
          <p className="period">2026</p>
        </div>
      </section>
    </div>
  </Main>
);

export default Credentials;
