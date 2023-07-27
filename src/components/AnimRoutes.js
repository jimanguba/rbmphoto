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
    <Route path='/rbmphoto' element={<Home />} />
    <Route path='/rbmphoto/about' element={<About />} />
    <Route path='/rbmphoto/portfolio' element={<Portfolio />} />
    <Route path='/rbmphoto/pricing' element={<Pricing />} />
    <Route path='/rbmphoto/contact' element={<Contact />} />
  </Routes>
};

export default AnimRoutes;
