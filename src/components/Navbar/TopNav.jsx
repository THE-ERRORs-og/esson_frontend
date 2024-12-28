import React from "react";
import { Link } from "react-router-dom";
import {logo} from "../../assets/images"
import CartBox from "./CartBox";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import SearchBar from "./SearchBar";


const TopNav = () => {
  return (
    <div className="flex items-center justify-center h-40 sm:h-20 py-3 shadow-md">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-5 text-nowrap gap-y-6 gap-x-36  h-full w-full md:w-[760px] lg:w-[960px] xl:w-[1200px] ">
        {/* Search Bar */}
        <SearchBar />
        {/* Logo Section */}
        <div className="flex items-center h-full">
          <img
            src={logo} // Replace with actual path or logo import
            alt="E-Mart Logo"
            className=" h-12 mr-3"
          />
          {/* <span className="text-2xl font-bold text-gray-800">e-mart</span> */}
        </div>

          {/* Right Section */}
          <div className="hidden sm:flex h-full w-auto lg:w-auto">
            <CartBox />
          </div>

      </div>
    </div>
  );
};

export default TopNav;



// const SearchBar = () => {
//   return (
//     <div className="flex items-center h-[70%] w-full justify-center max-w-full overflow-hidden">
//       <input
//         type="text"
//         placeholder="Search"
//         className="border text-sm border-gray-300 h-full px-4 py-2 w-full md:flex-1 min-h-5 rounded-l-md focus:outline-none"
//       />
//       <select className="hidden md:flex border text-sm border-gray-300 h-full px-4 py-2 bg-white focus:outline-none">
//         <option value="all">All Categories</option>
//         {/* Add more categories as options here */}
//       </select>
//       <button className="bg-gray-800 text-white h-full px-4 text-center flex items-center justify-center rounded-r-md">
//         <i className="text-2xl material-icons">search</i>
//       </button>
//     </div>
//   );
// };
