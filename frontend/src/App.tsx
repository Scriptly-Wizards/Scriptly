import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/Layout/NavBar/NavBar';
import Welcome from './component/Page/Welcome';
import Preview from './component/Page/Preview';

function App() {
  
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/preview" element={<Preview />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;