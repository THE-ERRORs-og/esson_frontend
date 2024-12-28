import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartBox = () => {
  return (
    <div className="flex  lg:flex items-center space-x-6">
      {/* Shopping Cart and Wishlist */}
      <div className="flex items-center space-x-4">
        {/* <div className="relative hidden ">
          <Link to="/wishlist" className="text-gray-800">
            <i className="material-icons material-symbols-outlined text-4xl text-gray-600">
              favorite
            </i>
          </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
            0
          </span>
        </div> */}
        <div className="flex justify-center items-center space-x-2">
          <div className="relative icon w-11">
            <Link to="/cart" className="text-gray-800 w-3">
              {/* <i className="material-icons text-4xl text-gray-600">
                shopping_bag
              </i> */}
            <MdOutlineShoppingCart className="text-3xl text-gray-600" />
            </Link>
            <span className="absolute top-0 right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="text-gray-600 text-sm">Shopping Cart</span>
            <span className="text-gray-600 text-sm">$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
