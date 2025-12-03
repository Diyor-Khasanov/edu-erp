import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './contexts';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        try {
          const res = await axios.get('http://localhost:5000/api/auth/me');
          setUser(res.data);
        } catch (error) {
          console.error("Token eskirgan yoki noto'g'ri:", error);
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};