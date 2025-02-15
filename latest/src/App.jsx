import React from 'react';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SearchPage from './Pages/SearchPage';
import ProfilePage from './Pages/ProfilePage';
import Signup from './Pages/Signup';
import About from './Pages/About';
const App = () => {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path='/' element ={<Home />}/>
      <Route path='/login' element ={<Login />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path='/search-page' element={<SearchPage/> }/>
      <Route path='/profile' element={<ProfilePage/> }/>
      <Route path='/about' element={<About/> }/>
    </Routes>

  </div>
  );
};

export default App;
