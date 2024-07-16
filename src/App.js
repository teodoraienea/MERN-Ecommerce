import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const location = useLocation();
  const showHeader = location.pathname === '/';

  return (
    <div>
      {showHeader && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;