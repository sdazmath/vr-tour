import React from 'react';
import CampusTour from './components/CampusTour';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tour' element={<CampusTour/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;