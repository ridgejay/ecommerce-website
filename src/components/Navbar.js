import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [user] = useState({username: 'Guest'})
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <ul className="flex text-lg">
          <li className="mr-6  hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6  hover:text-blue-500">
            <Link to="/products" className="ml-4 relative">
              Products
            </Link>
          </li>
          <li className="mr-6  hover:text-blue-500">
            <Link to="/cart" className="ml-4 relative">
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg">Welcome to Ani Kickz, {user.username}!</p>
      </div>
    </nav>
  );
};

export default Navbar;
