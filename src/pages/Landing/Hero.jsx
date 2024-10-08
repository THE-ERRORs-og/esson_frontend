
import { Button } from "../../components/ui/button";
import React from "react";
import { headphone,watch, b1 } from "../../assets/images";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8 bg-gray-100">
      {/* Main Promotion */}
      <div className="col-span-1 md:col-span-2 rounded-lg shadow-lg relative  bg-cover bg-center" style={{ backgroundImage: `url(${headphone})` }}>
        <div className="flex flex-col space-y-12 md:space-y-64">
          <div className="w-3/4 md:w-1/2 flex flex-col justify-center space-y-4 p-6 mt-4 md:mt-10 ml-4 md:ml-14">
            <span className="bg-blue-500 w-24 text-white px-4 py-1 text-sm font-semibold rounded-full">
              SALE $100
            </span>

            {/* Product Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-thin text-black">
                Are You Ready With <br />{" "}
                <span className="font-bold">Google VR</span>
              </h2>
              <p className="text-black mt-2 text-sm md:text-base">
                Coming October 2019, <br />
                Register Your Interest Now
              </p>
            </div>
            {/* <button className="bg-gradient-to-r from-red-500 to-orange-500 font-bold w-1/3 md:w-1/4 text-white md:text-xs md:py-3 px-4 rounded-3xl hover:bg-pink-600">
              SHOW NOW
            </button> */}
            <Button className= "bg-gradient-to-r from-red-500 to-orange-500 font-bold w-1/2 md:w-1/2 text-white text-xs md:py-3 px-4 rounded-3xl hover:bg-pink-600">Shop Now</Button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center space-x-2 pb-4">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Side Promotions */}
      <div className="flex justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-6 relative ">
        {/* Microsoft Headphone */}
        <div className="rounded-lg w-full shadow-lg relative bg-cover bg-center h-52 md:h-full"  style={{ backgroundImage: `url(${b1})` }}>
          <div className="flex flex-col h-full justify-center">
            <div className="w-3/4 md:w-1/2 flex flex-col justify-center space-y-4 p-6 ml-4 md:ml-14">
              <h2 className="text-xl md:text-2xl font-thin text-black">
                Microsoft<br />{" "}
                <span className="font-bold">Watch</span>
              </h2>
              <p className="text-black mt-2 text-sm md:text-base">
                From <span className="text-red-500">$69.99</span>
              </p>
              <h1 className="underline text-sm cursor-pointer">Shop Now!</h1>
            </div>
            {/* <div className="flex justify-center space-x-2 pb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* iPhone X Collection */}
        <div className="rounded-lg w-full shadow-lg relative bg-cover bg-center h-52 md:h-full" style={{ backgroundImage: `url(${watch})` }}>
          <div className="flex flex-col h-full justify-center">
            <div className="w-3/4 md:w-1/2 flex flex-col justify-center space-y-4 p-6 ml-4 md:ml-14">
              <h2 className="text-xl md:text-2xl font-thin text-black">
                Apple<br />{" "}
                <span className="font-bold">VR</span>
              </h2>
              <p className="text-black mt-2 text-sm md:text-base">
                From <span className="text-red-500">$69.99</span>
              </p>
              <h1 className="underline text-sm cursor-pointer">Shop Now!</h1>
            </div>
            {/* <div className="flex justify-center space-x-2 pb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
