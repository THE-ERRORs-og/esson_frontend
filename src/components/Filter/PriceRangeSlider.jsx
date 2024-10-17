import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const minRange = 0;
  const maxRange = 10000;
  const priceGap = 500;

  // Handle input change for the minimum price
  const handleMinInput = (e) => {
    let value = parseInt(e.target.value);
    if (value < minRange) {
      value = minRange; // Ensure it doesn't go below min range
    }
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  // Handle input change for the maximum price
  const handleMaxInput = (e) => {
    let value = parseInt(e.target.value);
    if (value > maxRange) {
      value = maxRange; // Ensure it doesn't go above max range
    }
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  // Handle slider range change for the minimum price
  const handleMinRange = (e) => {
    let value = parseInt(e.target.value);
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    } else {
      setMinPrice(maxPrice - priceGap); // Ensure the gap is maintained
    }
  };

  // Handle slider range change for the maximum price
  const handleMaxRange = (e) => {
    let value = parseInt(e.target.value);
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    } else {
      setMaxPrice(minPrice + priceGap); // Ensure the gap is maintained
    }
  };

  return (
    <div className="md:w-1/4 mt-4 bg-white rounded-lg ">
      <style>
        {`
          /* Add the slider styles here */
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #f14d43;
            border: 1px solid white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

          input[type="range"]::-moz-range-thumb {
             height: 15px;
            width: 15px;
            border-radius: 50%;
            background: #f14d43;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

          input[type="range"]::-ms-thumb {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background: #17a2b8;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }
        `}
      </style>

      <div className="flex items-center space-x-2 mb-3">
      <h2 className="text-sm uppercase font-bold">Price : </h2>
        <div className="flex items-center ">
         
          <span className="mr-2 text-sm">{minPrice} $</span>
          {/* <input
            type="number"
            value={minPrice}
            onChange={handleMinInput}
            className="w-20 border rounded-md text-sm p-0.5 text-center"
          /> */}
        </div>
        <div className="text-lg font-bold mr-2">-</div>
        <div className="flex items-center">
          <span className="mr-2 text-sm">{maxPrice} $</span>
          {/* <input
            type="number"
            value={maxPrice}
            onChange={handleMaxInput}
            className="w-20 border rounded-md text-sm p-0.5 text-center"
          /> */}
        </div>
      </div>

      <div className="relative">
        <div className="h-2 bg-gray-300 rounded-full">
          <div
            className="h-2 bg-[#f14d43] rounded-full"
            style={{
              left: `${(minPrice / maxRange) * 100}%`,
              right: `${100 - (maxPrice / maxRange) * 100}%`,
              position: "absolute",
            }}
          />
        </div>

        {/* Min Range Slider */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={minPrice}
          onChange={handleMinRange}
          className="absolute w-full top-0 appearance-none pointer-events-auto h-2 bg-transparent"
          style={{ zIndex: 3, top: "12px" }} // Min slider on top, slightly moved up
        />

        {/* Max Range Slider */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={maxPrice}
          onChange={handleMaxRange}
          className="absolute w-full top-0 appearance-none pointer-events-auto h-2 bg-transparent"
          style={{ zIndex: 2, top: "-12px" }} // Max slider slightly below the min slider
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
