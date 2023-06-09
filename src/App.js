import './App.scss';
import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error404';
import About from './Pages/About';
import ApartmentPage from './Pages/ApartmentPage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
                <Route path='*' element={<Error />}/>
                <Route path='/Apartment' element={<ApartmentPage />}/>
          </Routes>
      </BrowserRouter>
  );

}

export default App;
