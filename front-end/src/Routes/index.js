import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Seller from '../Pages/Seller';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/seller" element={<Seller />} />
    </Routes>
  );
}
