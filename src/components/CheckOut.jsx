// src/components/Checkout.jsx
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 md:mr-8">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">Full Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">Email Address</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">Address</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">City</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">Postal Code</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold">Country</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </form>
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                                <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                            <h3 className="text-lg font-semibold">Total</h3>
                            <p className="text-xl font-semibold">${totalAmount.toFixed(2)}</p>
                        </div>
                    </div>
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
