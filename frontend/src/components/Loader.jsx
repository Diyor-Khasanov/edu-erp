import React from 'react';
import '../styles/variables.scss';

const Loader = () => (
  <div style={{
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'var(--bg-primary)'
  }}>
    <div className="spinner" style={{
      width: '50px',
      height: '50px',
      border: '5px solid var(--color-gray)',
      borderTop: '5px solid var(--color-slate)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export default Loader;