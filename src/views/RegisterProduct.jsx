import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const RegisterProduct = () => {

    const navigate = useNavigate();

    const apiUrl = 'https://localhost/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const dataProductInit = {
        name: "",
        description: "",
        price: 0
    }

    const [DataProduct, setDataProduct] = useState(dataProductInit);

    const handleChange = (e) => {
        /*console.log('Este es el input al que se escribio',e.target.name);
        console.log('Este es el valor',e.target.value);*/
        setDataProduct({ ...DataProduct, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(DataProduct);
        await axios.post(`${apiUrl}/productos`, DataProduct, config)
            .then(response => {
                console.log(response);
                navigate('/catalogo');
            })
            .catch(err => {
                console.log(err);
            });

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Agregar producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Ej. Bebida fria de uva" 
                        onChange={handleChange}
                        required/>
                    </div> <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Precio</label>
                        <input type="number" id="email" name="price" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Ej. $2" 
                        onChange={handleChange}
                        required/>
                    </div> <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Descripcion</label>
                        <textarea id="message" name="description" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Ej. Bebida fria de uva natural sin azucar ni colorantes" 
                        onChange={handleChange}
                        required></textarea>
                    </div> <div className="text-center">
                        <button type="submit"  className="w-full px-4 py-2 bg-indigo-600 text-white font-medium text-sm leading-5 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" > Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterProduct;