// Selector.js
import React, { useState } from 'react';

const Selector = ({
  selectedType,
  setSelectedType,
  selectedPrintOption,
  setSelectedPrintOption,
}) => {
  // const [type, setType] = useState("Kraft");
  // const [printOption, setPrintOption] = useState("Inside and Outside");

  return (
    <div className="w-full ">
      <h3 className="text-lg mt-2 font-semibold">Select Type</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {["Kraft", "White", "Premium White"].map((item) => (
          <button
            key={item}
            className={`pt-2 pb-1 px-6 rounded-lg text-center text-sm font-medium transition duration-300 ${
              selectedType === item
                ? "bg-gray-200 border border-gray-400"
                : "bg-white border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedType(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-2">Print Option</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {["Inside and Outside", "Inside Only", "Outside Only"].map((option) => (
          <button
            key={option}
            className={`pt-2 pb-1 px-6 rounded-lg text-center text-sm font-medium transition duration-300 ${
              selectedPrintOption === option
                ? "bg-gray-200 border border-gray-400"
                : "bg-white border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedPrintOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
