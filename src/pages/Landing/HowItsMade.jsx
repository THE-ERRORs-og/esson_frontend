import React from "react";
import { p2 } from "@/assets/images";
import { FaArrowRight } from "react-icons/fa";

const HowItsMade = () => {
  return (
    <div className="mt-8 flex justify-between items-center rounded-lg outline-dashed outline-1 outline-slate-500 outline-offset-0 overflow-hidden">
      {/* Right Section with Background Image */}
      <div
        className="p-4 relative flex items-center justify-end flex-grow h-full bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${p2})`, // Pass the image dynamically
        }}
      >
        <div className=" absolute left-0 p-2 top-3 z-10 text-black font-semibold md:text-4xl text-2xl">
          Check how it is <span className="italic">made</span>
        </div>
        {/* Arrow */}
        <FaArrowRight className="text-black text-4xl font-bold "/>
      </div>
    </div>
  );
};

export default HowItsMade;
