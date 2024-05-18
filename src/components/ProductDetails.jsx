// src/components/ProductDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import RelatedProducts from './RelatedProduct';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    return (
        product && (
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <img src={product.image} alt={product.title} className="h-80 w-full md:w-1/2 object-cover mb-4 md:mb-0" />
                    <div className="md:ml-8">
                        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                        <p className="text-xl font-semibold text-gray-700 mb-4">${product.price}</p>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <button
                            onClick={() => dispatch(addItem(product))}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                <RelatedProducts category={product.category} />
            </div>
        )
    );
};

export default ProductDetails;
