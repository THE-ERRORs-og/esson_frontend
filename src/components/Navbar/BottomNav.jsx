import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { i } from "react-icons/hi"; // Add hamburger icon
import CartBox from "./CartBox";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Electronics", path: "/electronics" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Seller Page", path: "/seller" },
  ];

  return (
    <div className="bg-white shadow-lg py-2">
      <div className="mx-auto flex justify-between items-center px-4">
        {/* Left Section - Shop by Categories */}
        {/* <div className="flex items-center">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded-lg hover:shadow-md">
            <i className="text-xl" />
            <span>SHOP BY CATEGORIES</span>
          </button>
        </div> */}

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            <i className="material-icons text-4xl">menu</i>
          </button>
        </div>

        {/* Middle Section - Menu Items */}
        <div className="hidden lg:flex space-x-8 justify-center w-full
         items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-red-500 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section - Cart */}
        <div className="hidden sm:flex lg:hidden">
          <CartBox />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-14 z-10">
          <div className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-red-500"
                onClick={() => setIsOpen(false)} // Close the menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
