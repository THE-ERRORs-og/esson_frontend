

import { p1 } from '@/assets/images';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProductBanner = ({imgUrl,link, categoryName, linkName}) => {
  return (
    <div className="mt-8 flex justify-between items-center rounded-lg overflow-hidden relative">
      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${imgUrl})`, // Pass the image dynamically
          opacity: 0.5, // Background opacity
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full px-4 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center">
        {/* Title */}
        <div className="text-black font-semibold md:text-4xl text-2xl">
          {categoryName}
        </div>
        {/* Shop More Link */}
        <a
          href={`product?category=${link}`}
          className="text-black text-2xl font-bold underline"
        >
          {linkName}
        </a>
      </div>
    </div>
  );
};

export default ProductBanner;
