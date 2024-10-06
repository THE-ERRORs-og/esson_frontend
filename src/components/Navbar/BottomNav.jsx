import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartBox from "./CartBox";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State to toggle dropdown

  const menuDrawerRef = useRef(null); // Reference for mobile menu drawer
  const categoriesDropdownRef = useRef(null); // Reference for categories dropdown

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Clothes", path: "/clothes" },
    { name: "Food", path: "/food" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  // Close drawer or dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the mobile drawer
      if (
        menuDrawerRef.current &&
        !menuDrawerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      // Check if click is outside the categories dropdown
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg py-2 relative">
      <div className="mx-auto flex justify-between items-center px-4 w-full lg:w-[960px] xl:w-[1200px]">
        {/* Left Section - Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 border border-gray-400 rounded-md text-gray-800"
          >
            <i className="material-icons text-3xl">menu</i>
          </button>
        </div>

        {/* Shop by Categories */}
        <div className="flex items-center relative" ref={categoriesDropdownRef}>
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded-lg hover:shadow-md text-nowrap"
          >
            <span>SHOP BY CATEGORIES</span>
          </button>

          {isCategoriesOpen && (
            <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-48">
              <Link
                to="/food"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsCategoriesOpen(false)} // Close dropdown on click
              >
                Food
              </Link>
              <Link
                to="/clothes"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsCategoriesOpen(false)} // Close dropdown on click
              >
                Clothes
              </Link>
            </div>
          )}
        </div>

        {/* Middle Section - Desktop Menu */}
        <div
          className="hidden lg:flex space-x-8 justify-center w-full
         items-center"
        >
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

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-20">
          <div
            ref={menuDrawerRef}
            className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg p-4 z-30 flex flex-col"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 mb-4 self-end"
            >
              <i className="material-icons text-gray-800">close</i>
            </button>
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsOpen(false)} 
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
