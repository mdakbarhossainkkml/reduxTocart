// src/components/ProductList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
