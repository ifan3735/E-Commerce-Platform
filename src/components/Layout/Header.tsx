import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MyShop Logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-bold">MyShop</span>
        </Link>
        <nav className="flex space-x-4">
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
