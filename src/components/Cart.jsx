// src/components/Cart.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</h2>
            <div>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4"
              >
                Clear Cart
              </button>
              <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
