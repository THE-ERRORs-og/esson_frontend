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
    <div className="w-full">
      <h2 className="text-lg font-semibold mt-2">Quantity</h2>
      <div className="mt-2 w-full bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelection(index)}
            className={`flex items-center justify-between w-full px-4 py-4 border-b border-gray-200 ${
              selectedQuantity === index
                ? "bg-gray-200 text-gray-900 font-medium"
                : "text-gray-900"
            } hover:bg-gray-100 focus:outline-none`}
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
    </div>
  );
};

export default QuantitySelector;
