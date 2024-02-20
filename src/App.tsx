import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='text-[#444444]'>
      <Navbar />
      <Home />;
    </div>
  );
}

export default App;

