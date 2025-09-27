import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layout/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MainLayout />
      </div>
    </Router>
  );
};

export default App;
