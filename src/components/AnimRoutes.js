import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom'

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
};

export default AnimRoutes;
