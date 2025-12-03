import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthContext } from './context/contexts';
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import OfflinePage from "./components/OfflinePage";
import "./styles/variables.scss";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loader />;
  return user ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const AppContent = () => {
  const { user } = useContext(AuthContext);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  // if (!isOnline) return <OfflinePage />;

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Other Routes: /groups, /payments */}
            </Routes>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
