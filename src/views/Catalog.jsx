import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
//import modal from '../components/ModalEditProduct';
import ModalEditProduct from '../components/ModalEditProduct';
//import DataTable from 'react-data-table-component'

const Catalog = () => {

    const apiUrl = 'https://localhost/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const [Data, setData] = useState([]);
    const [ShowModal, setShowModal] = useState(false);
    const [Id, setId] = useState(0);

    const getAllProducts = async () => {
        const ans = await axios.get(`${apiUrl}/productos`, config);
        console.log(ans);
        setData(ans.data);
    };

    const deleteProduct = (Id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/productos/${Id}`, config)
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                    })
                getAllProducts();
            }
        });
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-[400px]">
            <div className="h-screen flex items-center justify-center">
                <div className="w-full max-w-7xl">
                    <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-orange-500 hover:to-orange-700 transform hover:scale-105 transition duration-300">
                        <Link to={"/registrar"}>Registrar producto</Link>
                    </button>
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Elige tu producto</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Data.map((item, key) => (
                            <div
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col"
                                key={key}
                            >
                                <h3 className="text-2xl font-bold text-gray-700 mb-4">{item.nombre}</h3>
                                <p className="text-gray-500 mb-2">ID: {item.id}</p>
                                <p className="text-lg text-gray-600 mb-6">{item.descripcion}</p>
                                <button
                                    onClick={() => {
                                        setShowModal(true);
                                        setId(item.id);
                                    }}
                                    className="bg-blue-500 text-white rounded-lg py-3 px-5 font-medium hover:bg-blue-600 transition duration-300"
                                >
                                    Editar Producto
                                </button>
                                <button
                                    onClick={() => { deleteProduct(item.id); }}
                                    className="bg-blue-500 text-white mt-2 rounded-lg py-3 px-5 font-medium hover:bg-blue-600 transition duration-300"
                                >
                                    Eliminar Producto
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {ShowModal && <ModalEditProduct id={Id} setShowModal={setShowModal} getAllProducts={getAllProducts} />}
        </div>

    )
}

export default Catalog;