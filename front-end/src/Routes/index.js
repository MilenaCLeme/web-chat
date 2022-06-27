import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adm from '../Pages/Adm';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Seller from '../Pages/Seller';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/adm" element={<Adm />} />
      {/* <Route exact path="/chat" element={<Chat />} /> */}

      <Route exact path="/seller" element={<Seller />} />

    </Routes>
  );
}
