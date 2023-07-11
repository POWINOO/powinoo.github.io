import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataContextProvider } from "./Context/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>
);
