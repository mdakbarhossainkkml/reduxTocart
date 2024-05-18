// SideNav.js
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="bg-gray-800 h-full text-white py-8 px-4">
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <ul>
                <li className="mb-2">
                    <Link to="/dashboard" className="block hover:text-gray-300">Dashboard</Link>
                </li>
                <li className="mb-2">
                    <Link to="/addproducts" className="block hover:text-gray-300">Products</Link>
                </li>
                <li className="mb-2">
                    <Link to="/categories" className="block hover:text-gray-300">Categories</Link>
                </li>
                <li className="mb-2">
                    <Link to="/brands" className="block hover:text-gray-300">Brands</Link>
                </li>
                <li className="mb-2">
                    <Link to="/orders" className="block hover:text-gray-300">Orders</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideNav;
