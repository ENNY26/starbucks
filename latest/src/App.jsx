import React from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <Home/>
      
    </div>
  );
};

export default App;
