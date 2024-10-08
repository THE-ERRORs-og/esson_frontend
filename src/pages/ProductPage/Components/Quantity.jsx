import React, { useState } from "react";

const QuantitySelector = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const options = [
    { quantity: "1 Sample", price: "$45.00", perUnit: "$45.00 / Unit" },
    { quantity: "25", price: "$100.00", perUnit: "$4.00 / Unit" },
    { quantity: "50", price: "$105.00", perUnit: "$2.10 / Unit" },
    { quantity: "100", price: "$140.00", perUnit: "$1.40 / Unit" },
    { quantity: "250", price: "$280.00", perUnit: "$1.12 / Unit" },
    { quantity: "500", price: "$490.00", perUnit: "$0.980 / Unit" },
    { quantity: "1000", price: "$870.00", perUnit: "$0.870 / Unit" },
  ];

  const handleSelection = (index) => {
    setSelectedQuantity(index);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Quantity</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelection(index)}
            className={`flex items-center justify-between w-full px-4 py-4 border-b border-gray-200 ${
              selectedQuantity === index
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-900"
            } hover:bg-gray-50 focus:outline-none`}
          >
            <span className="text-left">{option.quantity}</span>
            <span className="flex flex-col text-right">
              <span>{option.price}</span>
              <span className="text-sm text-gray-500">{option.perUnit}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-sm text-indigo-600 hover:underline"
        >
          Need more? Click here
        </a>
        <p className="text-sm text-gray-500 mt-1">Get extra savings with <span className="font-semibold text-indigo-600">noissue+</span></p>
      </div>
    </div>
  );
};

export default QuantitySelector;
