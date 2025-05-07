import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header  from './Header/Header';
import  Home  from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
function App() {
  return (
    <Router>
    <Header /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
  );
}

export default App;
