import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartBox from "./CartBox";
import { MdMenu, MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { logo } from "../../assets/images";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State to toggle dropdown

  const menuDrawerRef = useRef(null); // Reference for mobile menu drawer
  const categoriesDropdownRef = useRef(null); // Reference for categories dropdown
  const overlayRef = useRef(null); // Reference for the dimmed background

  const menuItems = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    { name: "Clothing", path: "/product?category=Cloth", icon: <GiClothes /> },
    {
      name: "Food Packaging",
      path: "/product?category=Food",
      icon: <MdOutlineFastfood />,
    },
    { name: "About Us", path: "/aboutus", icon: <AiOutlineInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <AiOutlinePhone /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile drawer or dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile drawer
      if (
        menuDrawerRef.current &&
        !menuDrawerRef.current.contains(event.target) &&
        isOpen &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      // Check if the click is outside the categories dropdown
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
  }, [isOpen]);

  return (
    <div className="bg-white shadow-lg py-2 relative">
      <div className="mx-auto flex justify-between items-center px-4 w-full lg:w-[960px] xl:w-[1200px]">
        {/* Left Section - Hamburger Menu */}
        <div className="sm:hidden">
          <button
            className="flex items-center justify-center w-12 h-12 border border-gray-400 rounded-md text-gray-800"
            onClick={toggleMenu}
          >
            <MdMenu size={24} />
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
        <div className="hidden sm:flex space-x-8 justify-center w-full items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 uppercase text-xs md:text-sm font-semibold hover:text-red-500 transition duration-300"
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
      <div
        className={`fixed top-0 left-0 h-full w-2/3 z-50 flex flex-col items-start pl-8 gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        ref={menuDrawerRef}
      >
        <button
          aria-label="Close menu"
          aria-expanded={isOpen}
          className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 lg:hidden"
          onClick={toggleMenu}
        >
          <FaChevronRight className="text-xl text-[#f14d43]"/>
        </button>

        <img
          src={logo} // Replace with actual path or logo import
          alt="E-Mart Logo"
          className="h-12 p-1 "
        />
        {menuItems.map((item) => (
          <div className="flex space-x-10 pt-2 items-center" key={item.name}>
            <div className="text-xl text-[#f14d43]" onClick={toggleMenu}>
              {item.icon}
            </div>
            <Link
              to={item.path}
              onClick={toggleMenu}
              className="text-gray-800 text-xl font-semibold hover:text-red-500 transition duration-300"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Dimmed Background Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition duration-300"
          onClick={toggleMenu} // Close menu when clicking on overlay
        ></div>
      )}
    </div>
  );
};

export default BottomNav;
