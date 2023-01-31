import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
