// Selector.js
import React, { useState } from 'react';

const Selector = () => {
  const [type, setType] = useState('Kraft');
  const [printOption, setPrintOption] = useState('Inside and Outside');

  return (
    <div className="w-80 p-4">
      <h3 className="text-lg font-semibold mb-3">Type</h3>
      <div className="grid grid-cols-2 gap-2 mb-5">
        {['Kraft', 'White', 'Premium White'].map((item) => (
          <button
            key={item}
            className={`py-2 rounded-lg text-center text-sm font-medium transition duration-300 ${
              type === item
                ? 'bg-gray-200 border border-gray-400'
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setType(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-3">Print Option</h3>
      <div className="grid grid-cols-1 gap-2">
        {['Inside and Outside', 'Inside Only', 'Outside Only'].map((option) => (
          <button
            key={option}
            className={`py-2 rounded-lg text-center text-sm font-medium transition duration-300 ${
              printOption === option
                ? 'bg-gray-200 border border-gray-400'
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setPrintOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
