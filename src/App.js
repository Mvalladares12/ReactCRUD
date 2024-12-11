//import logo from './logo.svg';
import './App.css';
/*import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';*/
import { BrowserRouter } from 'react-router-dom';
import  Router  from './components/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
