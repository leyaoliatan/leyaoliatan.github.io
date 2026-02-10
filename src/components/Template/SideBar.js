import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import EmailLink from '../Contact/EmailLink';

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
          <EmailLink />
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I am Leyao (Lia). I am a Ph.D. student in Quantitative Marketing at{' '}
        <a href="https://www.sauder.ubc.ca/">Sauder Business School</a>, University of British Columbia (UBC).
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
