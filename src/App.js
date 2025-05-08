import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header  from './Header/Header';
import  Home  from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import More from './pages/More/More';

import Modals from './Modals/Modals';

function App() {
  return (
    <Router>
    <Header /> 
    <Modals />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-categories-goods" element={<Categories />} />
     <Route path="/:id" element={<More />} />
      <Route path="*" element={<Home />} /> {/* <- 404 */}
    </Routes>
  </Router>
  );
}

export default App;
