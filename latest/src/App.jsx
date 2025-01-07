import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipedetails from './pages/Recipedetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:_id" element={<Recipedetails />} />
      </Routes>
    </Router>
  );
};

export default App;
