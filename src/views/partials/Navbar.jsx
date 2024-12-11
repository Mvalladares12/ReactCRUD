import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <a href="#logo">Logo</a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            <li className="text-white"><Link to={'/'}>Inicio</Link></li>
                            <li className="text-white"><Link to={'/nosotros'}>Nosotros</Link></li>
                            <li className="text-white"><Link to={'/contacto'}>Contacto</Link></li>
                            <li className="text-white"><Link to={'/catalogo'}>Catalogo</Link></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mobile-menu hidden md:hidden">
                    <ul className="mt-4 space-y-4">
                        <li className="block px-4 py-2 text-white bg-gray-900 rounded"><Link to={'/'}>Inicio</Link></li>
                        <li className="block px-4 py-2 text-white bg-gray-900 rounded"><Link to={'/nosotros'}>Nosotros</Link></li>
                        <li className="block px-4 py-2 text-white bg-gray-900 rounded"><Link to={'/contacto'}>Contacto</Link></li>
                        <li className="block px-4 py-2 text-white bg-gray-900 rounded"><Link to={'/catalogo'}>Catalogo</Link></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;