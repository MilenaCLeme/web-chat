/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adm from '../Pages/Adm';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Seller from '../Pages/Seller';
import ProtectedRoute from '../services/auth';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      {/* <Route exact path="/chat" element={<Chat />} /> */}
      <Route
        exact
        path="/adm"
        element={(
          <ProtectedRoute roles="admin">
            <Adm />
          </ProtectedRoute>
        )}
      />
      <Route
        exact
        path="/seller"
        element={(
          <ProtectedRoute roles="atendente">
            <Seller />
          </ProtectedRoute>
        )}
      />
    </Routes>
  );
}
