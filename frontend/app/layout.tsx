"use client"
import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from '@/store';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div>
            <NavBar />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}

export default layout;