//Quantity.jsx
import React, { useState } from "react";

const QuantitySelector = ({
  options = [],
  selectedQuantity,
  setSelectedQuantity,
}) => {
  // const [selectedQuantity, setSelectedQuantity] = useState(null);

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
              <span>$ {option.price}</span>
              <span className="text-sm text-gray-500">
                $ {option.unit_price} /unit
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-indigo-600 hover:underline">
          Need more? Click here
        </a>
        <p className="text-sm text-gray-500 mt-1">
          Get extra savings with{" "}
          <span className="font-semibold text-indigo-600">noissue+</span>
        </p>
      </div>
    </div>
  );
};

export default QuantitySelector;
