import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
