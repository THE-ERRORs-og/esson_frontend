import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-[#ffefad] p-6 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4">
        {/* Left Side: Logo and Text */}
        <div className="flex items-center space-x-2">
         
          <div>
            <h2 className="text-center md:text-start font-semibold text-lg">Unlock FREE & Priority Shipping with Plus!</h2>
            <div className="text-center md:text-start text-xs md:text-sm text-gray-600 flex space-x-2">
              <span>✅ Unlimited FREE Shipping</span>
              <span>✅ Member Discounts</span>
              <span>✅ Priority Processing</span>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side: Button */}
      <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-md">
        Get Free Shipping
      </button>
    </div>
  );
};

export default PromoBanner;
