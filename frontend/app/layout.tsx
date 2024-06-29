import React from 'react';
import NavBar from '../component/NavBar/NavBar';

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
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

export default layout;