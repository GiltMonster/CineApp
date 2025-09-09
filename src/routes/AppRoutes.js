import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/movie/:id" element={
      <PrivateRoute>
        <MovieDetails />
      </PrivateRoute>
    } />
    <Route path="/" element={
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    } />
  </Routes>
);

export default AppRoutes;
