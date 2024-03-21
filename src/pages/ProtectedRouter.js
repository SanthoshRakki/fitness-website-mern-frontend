// ProtectedRouter.js
import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
  const authToken = JSON.parse(localStorage.getItem('auth'));

  return authToken && authToken !== null ? <Outlet /> : <Navigate to="/login"  />;
};


export default ProtectedRouter;
