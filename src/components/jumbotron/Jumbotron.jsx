import React from 'react';

const Jumbotron = () => (
  <div className="my-3">
    <div className="p-5 bg-body-tertiary h-100">
      <div className="container py-5">
        <h1>&ldquo;Hello! Sharing world&rdquo;</h1>
        <h2 className="text-body-emphasis display-3">Creative commons</h2>
        <h2 className="text-body-emphasis display-3">Global Summit</h2>
        <h2 className="text-body-emphasis display-3">2015</h2>
        <p className="col-lg-8 me-auto lead">
          This takes the basic jumbotron above and makes its background edge-to-edge with a
          {' '}
          <code>.container</code>
          {' '}
          inside to align content. Similar to above, it&apos;s been recreated with
          built-in grid and utility classes.
        </p>
      </div>
    </div>
  </div>
);

export default Jumbotron;
