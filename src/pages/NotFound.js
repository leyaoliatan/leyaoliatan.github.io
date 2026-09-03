import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const PageNotFound = () => (
  <Main
    title="Page Not Found"
    description="The content you are looking for cannot be found."
  >
    <div className="site-page not-found">
      <h1>Page Not Found</h1>
      <p>
        Return <Link to="/">home</Link>.
      </p>
    </div>
  </Main>
);

export default PageNotFound;
