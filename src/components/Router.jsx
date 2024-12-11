import {Routes, Route} from 'react-router-dom'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs';
import Navbar from '../views/partials/Navbar';
import Contact from '../views/Contact';
import Catalog from '../views/Catalog';
import Footer from '../views/partials/Footer';
import RegisterProduct from '../views/RegisterProduct';


const Router =()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/nosotros' element={<AboutUs/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/catalogo' element={<Catalog/>}/>
                <Route path='/registrar' element={<RegisterProduct/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Router;