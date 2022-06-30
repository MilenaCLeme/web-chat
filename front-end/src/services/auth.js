/* eslint-disable react/prop-types */
import React from 'react';

import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ roles, children }) {
  if (JSON.parse(localStorage.getItem('isAuthenticated')) !== roles) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
