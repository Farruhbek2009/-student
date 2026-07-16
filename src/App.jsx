import React from 'react';
import Sidebar from './ui/sidebar/sidebar';
import Navbar from './ui/navbar/navbar';
import Mains from './ui/main/mains';
import { Route, Router, Routes } from 'react-router-dom';
import "./App.css"
import Box from './pages/box';
import Products from './pages/products';
import Card from './pages/card';
import Li from './pages/li';
const App = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="box">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="mains">
            <Routes>
              <Route path='/' element={<Mains />} />
              <Route path='/asosiypanel' element={<Box />} />
              <Route path='/buyurtmalar' element={<Products />} />
              <Route path='/xabarlar' element={<Card />} />
              <Route path='/statistika' element={<Li />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;