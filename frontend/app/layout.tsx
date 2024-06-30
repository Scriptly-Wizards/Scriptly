"use client"
import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from '@/store';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div>
          <NavBar />
          <main>
            <Provider store={store}>
              {children}
            </Provider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default layout;