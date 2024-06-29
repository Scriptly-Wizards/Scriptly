import Layout from '../app/layout';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
