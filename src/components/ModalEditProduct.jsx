import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const ModalEditProduct = (props) => {

    const dataProductInit = {
        nombre: "",
        descripcion: "",
        precio: 0
    }

    const [DataProduct, setDataProduct] = useState(dataProductInit);

    const apiUrl = 'http://localhost/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const getProduct = async() =>{
        const res = await axios.get(`${apiUrl}/productos/${props.id}`, config);
        console.log(res);
        setDataProduct(res.data);
    }

    const handleChange = (e) => {
        /*console.log('Este es el input al que se escribio',e.target.name);
        console.log('Este es el valor',e.target.value);*/
        setDataProduct({...DataProduct, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(DataProduct);
        const response=await axios.put(`${apiUrl}/productos/${props.id}`,DataProduct,config)
        .then((response)=>{
            console.log(response);
            //navigate('/catalogo');
        })
        .catch(err=>{
            console.log(err);
        });
        props.setShowModal(false);
        props.getAllProducts();
    }

    useEffect(() => {
        getProduct();
      }, [])
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full max-w-2xl my-6 mx-auto">
                    {/* Content */}
                    <div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-200 rounded-t">
                            <h3 className="text-2xl font-bold text-gray-800">Editar producto</h3>
                            <button
                                className="p-1 ml-auto bg-transparent text-gray-500 hover:text-gray-800 transition duration-300 outline-none focus:outline-none"
                                onClick={() => {
                                    props.setShowModal(false);
                                }}
                            >
                                <span className="text-2xl">×</span>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="flex items-center justify-center w-full bg-gray-50">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={DataProduct.nombre}
                                            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Ej. Bebida fría de uva"
                                            onChange={(e)=>{
                                                setDataProduct({
                                                    ...DataProduct,
                                                    nombre:e.target.value
                                                })
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Precio</label>
                                        <input
                                            type="number"
                                            id="email"
                                            name="price"
                                            value={DataProduct.precio}
                                            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Ej. $2"
                                            onChange={(e)=>{
                                                setDataProduct({
                                                    ...DataProduct,
                                                    precio:e.target.value
                                                })
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Descripción</label>
                                        <textarea
                                            id="message"
                                            name="description"
                                            rows="4"
                                            value={DataProduct.descripcion}
                                            className="mt-2 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Ej. Bebida fría de uva natural sin azúcar ni colorantes"
                                            onChange={(e)=>{
                                                setDataProduct({
                                                    ...DataProduct,
                                                    descripcion:e.target.value
                                                })
                                            }}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Guardar cambios
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalEditProduct;