import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import AboutMe from './views/AboutMe';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;