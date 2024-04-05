import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import CartPage from './components/Pages/Cart/CartPage';
import Login from './components/Pages/Login/Login';
import RegisterPage from './components/Pages/Register/registerPage';
import AuthRoute from './components/Authroute/AuthRoute';
import Admin from './components/Pages/Admin/Admin';
import FoodAdmin from './components/Pages/FoodAdmin/FoodAdmin';
import Edit from './components/Pages/Edit/Edit';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/search/:searchTerm" element={<Home />} />
        <Route path ="/cart" element={<AuthRoute><CartPage /></AuthRoute>} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/admin" element={<AuthRoute><Admin /></AuthRoute>} />
        <Route path ="/foodadmin" element={<AuthRoute><FoodAdmin /></AuthRoute>} />
        <Route path ="/foodadd" element={<AuthRoute><Edit /></AuthRoute>} />
        <Route path ="/foodadd/:foodId" element={<AuthRoute><Edit /></AuthRoute>} />
    </Routes>
  );
}
