import React from "react";

const AdvertisementBar = () => {
  return (
    <section>
      <div className="bg-gray-800 text-gray-300 text-center py-2 overflow-hidden whitespace-nowrap">
        <marquee className="flex justify-center">
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
          <span className="mx-8">REQUEST A FREE QUOTE TODAY</span>
        </marquee>
      </div>
    </section>
  );
};

export default AdvertisementBar;
