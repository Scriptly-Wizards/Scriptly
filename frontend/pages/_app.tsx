import store from '@/store';
import Layout from '../app/layout';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
