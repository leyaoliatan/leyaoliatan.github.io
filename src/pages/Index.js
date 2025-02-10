import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Welcome to my website."
    style={{ border: 'none' }}
  >
    {/* <article className="post" id="index">
      <div className="title">
        <h2>
          <Link to="/"> Hi There! </Link>
        </h2>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, {' '} or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
      </div>
    </article> */}
  </Main>
);

export default Index;
