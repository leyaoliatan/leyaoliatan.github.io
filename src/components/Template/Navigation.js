import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import routes from '../../data/routes';

const Navigation = () => (
  <header className="site-header">
    <Link className="site-brand" to="/">Leyao (Lia) Tan</Link>
    <nav className="site-nav" aria-label="Primary navigation">
      {routes.map((route) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'site-nav-link is-active' : 'site-nav-link')}
          end={route.path === '/'}
          key={route.path}
          to={route.path}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Navigation;
