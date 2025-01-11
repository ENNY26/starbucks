import React from 'react';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
const App = () => {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path='/' element ={<Home />}/>
      <Route path='login' element ={<Login />}/>
    </Routes>

  </div>
  );
};

export default App;
