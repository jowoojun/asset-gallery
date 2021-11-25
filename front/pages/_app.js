import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Asset Gallery</title>
    </Head>
    <div style={{ maxWidth: '1024px', textAlign: 'left', margin: '0px auto' }}> 
      <Component />
    </div>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
