import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Products from './Products';
import Mina from './Mina';
import Empresa from './Empresa';
import Contacto from './Contacto';

import './i18n'; 


const App = () => {
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mina" element={<Mina />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
   
    </Router>
  );
};

export default App;
