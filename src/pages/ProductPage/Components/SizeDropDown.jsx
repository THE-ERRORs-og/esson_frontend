import React, { useState } from 'react';

const SizeDropdown = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown open state

  const handleSelect = (value) => {
    setSelectedSize(value);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const sizeOptions = [
    { value: '102x152x76mm', label: '102 x 152 x 76 mm (4" x 6" x 3")' },
    { value: '102x102x51mm', label: '102mm x 102mm x 51mm (4" x 4" x 2")' },
    { value: '127x203x76mm', label: '127 x 203 x 76 mm (5" x 8" x 3")' },
    { value: '127x76x38mm', label: '127mm x 76mm x 38mm (5" x 3" x 1.5")' },
    { value: '152x152x51mm', label: '152 x 152 x 51 mm (6" x 6" x 2")' },
    { value: '152x229x76mm', label: '152 x 229 x 76 mm (6" x 9" x 3")' },
  ];

  return (
    <div className="relative w-full max-w-xs mt-4">
      {/* Custom Dropdown Trigger */}
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none cursor-pointer relative"
      >
        {selectedSize
          ? sizeOptions.find((option) => option.value === selectedSize)?.label
          : 'Select a size'}

        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className={`w-5 h-5 text-gray-500 transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {sizeOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="py-2 px-4 flex justify-between items-center text-sm text-gray-700 hover:bg-indigo-100 cursor-pointer"
            >
              {option.label}
              {selectedSize === option.value && (
                <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SizeDropdown;
