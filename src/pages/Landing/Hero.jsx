import React from "react";
import {
  craft_bag,
  p3,
  p1,
  p2,
  watch,
  boss_cup_white,
  pizza_box_single,
  b1,
} from "../../assets/images";
import QuoteButton from "@/components/Button/QuoteButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Promotion */}
      <div
        className="col-span-1 md:col-span-2 rounded-lg shadow-lg relative  bg-cover bg-center"
        style={{ backgroundImage: `url(${p3})` }}
      >
        <div className="flex flex-col space-y-12 md:space-y-64">
          <div className="w-3/4 md:w-1/2 flex flex-col space-y-3 p-6 md:absolute top-32 left-9 ">
            <h2 className="text-2xl md:text-3xl font-thin text-black">
              Get Fries Bags in Bulk!
              <br />{" "}
              <span className="font-bold text-white">
                Shop Smart, Save More!
              </span>
            </h2>

            <QuoteButton text="Request a quote" onClick={()=>{
              navigate("/product-page/pb01");
            }}/>
          </div>

          {/* Carousel Dots */}
          {/* <div className="flex justify-center space-x-2 pb-4">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
          </div> */}
        </div>
      </div>

      {/* Side Promotions */}
      <div className="flex justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-6 relative ">
        {/* Microsoft Headphone */}
        <div
          className="rounded-lg w-full shadow-lg relative bg-cover bg-center h-52 md:h-full"
          style={{ backgroundImage: `url(${p2})` }}
        >
          <div className="flex flex-col space-y-12 md:space-y-64">
            <div className="w-3/4 md:w-1/2 flex flex-col space-y-3 p-6 top-32 left-9 ">
              <h2 className="text-lg md:text-3xl font-thin text-black">
                Paper <br /> <span className="font-bold text-white">Cup</span>
              </h2>

              <QuoteButton text="Request a quote" onClick={()=>{
                navigate("/product-page/pcp01");
              }}/>
            </div>
          </div>
        </div>

        {/* iPhone X Collection */}
        <div
          className="rounded-lg w-full shadow-lg relative bg-cover bg-center h-52 md:h-full"
          style={{ backgroundImage: `url(${p1})` }}
        >
          <div className="flex flex-col h-full justify-center">
            <div className="flex flex-col space-y-12 md:space-y-64">
              <div className="w-3/4 md:w-1/2 flex flex-col space-y-3 p-6 top-32 left-9 ">
                <h2 className="text-lg md:text-3xl font-thin text-black">
                  Pizza <br /> <span className="font-bold text-white">Box</span>
                </h2>

                <QuoteButton text="Request a quote" onClick={()=>{
                  navigate("/product-page/pbx01");
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
