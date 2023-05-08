import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return isLoggedIn
    ? { path: path, element: element }
    : { path: path, element: <Navigate to="/login" replace /> };
};

export default PrivateRoute;

