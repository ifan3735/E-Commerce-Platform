import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <nav className="p-4">
        <Link to="/admin/products" className="block py-2">Manage Products</Link>
        <Link to="/admin/orders" className="block py-2">Manage Orders</Link>
        <Link to="/admin/users" className="block py-2">Manage Users</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
