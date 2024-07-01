import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardListIcon,
  UserIcon,
  CubeIcon,
} from '@heroicons/react/20/solid';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/admin', label: 'Dashboard', icon: HomeIcon },
    { to: '/admin/products', label: 'Manage Products', icon: CubeIcon },
    { to: '/admin/orders', label: 'Manage Orders', icon: ClipboardListIcon },
    { to: '/admin/users', label: 'Manage Users', icon: UserIcon },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-full flex-shrink-0">
      <nav className="p-4 space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors ${
              location.pathname === to ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
