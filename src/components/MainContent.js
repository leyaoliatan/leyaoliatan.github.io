import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from './Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const MainContent = () => (
  <section id="main-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
    <section id="intro" style={{ textAlign: 'center' }}>
      <Link to="/" className="logo">
        <img
          src={`${PUBLIC_URL}/images/me.jpg`}
          alt=""
          style={{ width: '300px', height: '300px' }}
        />
      </Link>
      <header>
        <h2 style={{ fontSize: '2rem' }}>Leyao (Lia) Tan</h2>
        <p style={{ fontSize: '1.3rem' }}>
          <a href="mailto:leyao.tan@sauder.ubc.ca">leyao.tan@sauder.ubc.ca</a>
        </p>
      </header>
    </section>

    <section className="blurb" style={{ textAlign: 'left', padding: '0 0rem' }}>
      {/* <h2 style={{ fontSize: '1.5rem', textAlign: 'left' }}>About</h2> */}
      <p style={{ fontSize: '1.2rem', textAlign: 'left', lineHeight: '1.8' }}>
        Hi! I am Leyao. I am a Ph.D. student in Quantitative Marketing at{' '}
        <a href="https://www.sauder.ubc.ca/">Sauder Business School</a>, University of British Columbia (UBC).
        I hold a Master of Science in Business Administration (Quant Marketing) from{' '}
        <a href="https://www.acem.sjtu.edu.cn/en/">Antai College of Economics and Management</a>,
        Shanghai Jiao Tong University (SJTU) and a bachelor&apos;s degree from{' '}
        <a href="https://en.ruc.edu.cn/">Renmin University of China</a> (RUC).
      </p>
      <p style={{ fontSize: '1.2rem', textAlign: 'left', lineHeight: '1.8' }}>
        I am passionate about causal inference and machine learning methods and their application
        in digital marketing, fraud prevention, and climate sustainability.
      </p>
      <p style={{ fontSize: '1.2rem', textAlign: 'left', lineHeight: '1.8' }}>
        In my free time, I enjoy hiking, rock climbing,{' '}
        <a href="https://unsplash.com/@liatan">photography</a>, and exploring tea/coffee from around the world.
        I am also a beginner of weightlifting :).
      </p>
    </section>

    <section id="footer" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <ContactIcons />
      <p className="copyright" style={{ fontSize: '0.5rem' }}>
        &copy; {new Date().getFullYear()} Leyao Tan. Thanks to <Link to="https://mldangelo.com">Michael D&apos;Angelo</Link>.
      </p>
    </section>
  </section>
);

export default MainContent;
