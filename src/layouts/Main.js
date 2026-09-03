import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = ({ children, description, title }) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Leyao (Lia) Tan"
      defaultTitle="Leyao (Lia) Tan"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div className="site-shell">
      <Navigation />
      <main id="main" className="site-main">{children}</main>
      <footer className="site-footer">
        © 2026 Leyao Tan ·{' '}
        <a href="mailto:leyao.tan@sauder.ubc.ca">leyao.tan@sauder.ubc.ca</a>
      </footer>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Main;
