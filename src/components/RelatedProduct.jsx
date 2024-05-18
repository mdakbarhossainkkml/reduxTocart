// src/components/RelatedProducts.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RelatedProducts = ({ category }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setRelatedProducts(response.data);
        };
        fetchRelatedProducts();
    }, [category]);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedProducts.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-700">${product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
