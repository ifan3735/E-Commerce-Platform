import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoutes: React.FC<AdminRouteProps> = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  const isAuthenticated = currentUser != null;
  const isAdmin = currentUser?.email === 'admin@example.com'; // Replace with actual admin check

  return (
    <Route
      {...rest}
      element={isAuthenticated && isAdmin ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    />
  );
};

export default AdminRoutes;
function useAuth(): { currentUser: any; } {
  throw new Error('Function not implemented.');
}

