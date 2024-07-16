import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root container
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the app using the new API
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);