import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/admin/products" className="block bg-indigo-600 text-white py-2 px-4 rounded text-center">
            Manage Products
          </Link>
          <Link to="/admin/orders" className="block bg-indigo-600 text-white py-2 px-4 rounded text-center">
            Manage Orders
          </Link>
          <Link to="/admin/users" className="block bg-indigo-600 text-white py-2 px-4 rounded text-center">
            Manage Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
