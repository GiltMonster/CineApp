import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/movie/:id" element={<MovieDetails />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
