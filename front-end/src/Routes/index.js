import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}
