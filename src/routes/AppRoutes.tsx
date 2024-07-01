// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/User/Login';
import Signup from '../components/User/Signup';
import Cart from '../components/Cart/Cart';
import Checkout from '../pages/Checkout';
import AdminDashboard from '../pages/AdminDashboard';
import ProductManagement from '../pages/ProductManagement';
import Profile from '../components/User/Profile';
import ProductDetail from '../components/Product/ProductDetail';
import PrivateRoute from './PrivateRoute';
import AdminRoutes from './AdminRoutes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/admin" element={<AdminRoutes><AdminDashboard /></AdminRoutes>} />
      <Route path="/admin/products" element={<AdminRoutes><ProductManagement /></AdminRoutes>} />
    </Routes>
  );
};

export default AppRoutes;
