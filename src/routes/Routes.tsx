import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import SendMoney from '../pages/SendMoney';
import Transactions from '../pages/Transactions';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing';

// Mock authentication state
const isAuthenticated = false;

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated ? <>{element}</> : <Navigate to="/auth" replace />;
};

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/send-money"
        element={
          <PrivateRoute
            element={
              <MainLayout>
                <SendMoney />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/transactions"
        element={
          <PrivateRoute
            element={
              <MainLayout>
                <Transactions />
              </MainLayout>
            }
          />
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};

export default Routes;
