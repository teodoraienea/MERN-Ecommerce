import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Favourites from './components/Favourites';
import MyChart from './components/MyChart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/mychart" element={<MyChart />} />
      </Routes>
    </div>
  );
}

export default App;