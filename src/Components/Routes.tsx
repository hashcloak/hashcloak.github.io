import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage';
import Services from './Subpages/Services';
import Landing from './Subpages/Landing';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;