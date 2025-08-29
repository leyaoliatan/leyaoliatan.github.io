import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Leyao (Lia) Tan</h2>
        <p>
          <a href="leyao.tan@ubc.ca">leyao.tan@sauder.ubc.ca</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I am Leyao. I am a Ph.D. student in Quantitative Marketing at{' '}
        <a href="https://www.sauder.ubc.ca/">Sauder Business School</a>, University of British Columbia (UBC).
        I hold a Master of Science in Business Administration (Quant Marketing) from{' '}
        <a href="https://www.acem.sjtu.edu.cn/en/">Antai College of Economics and Management</a>,
        Shanghai Jiao Tong University (SJTU) and a bachelor&apos;s degree from{' '}
        <a href="https://en.ruc.edu.cn/">Renmin University of China</a> (RUC).
      </p>
      <p>
        I am passionate about causal inference and machine learning methods and their application
        in digital marketing, fraud prevention, and climate sustainability.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? (
            <Link to="/about" className="button">
              More Fun Facts About Me
            </Link>
          ) : (
            <Link to="/contact" className="button">
              Keep in Touch
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; {new Date().getFullYear()} Leyao Tan. Thanks to <Link to="https://mldangelo.com">Michael D&apos;Angelo</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
