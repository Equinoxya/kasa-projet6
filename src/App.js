import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Fiche from './Pages/Fiche';
import Error from './Pages/Error404';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='*' element={<Error />}/>
              <Route path='/Fiche' element={<Fiche />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
