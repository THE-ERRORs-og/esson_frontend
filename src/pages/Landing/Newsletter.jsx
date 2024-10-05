import { Button } from "@/components/ui/button";
import React from "react";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="flex justify-center items-center gap-6 flex-col bg-[#f5f5f5] p-8"
    >
      {/* Newsletter Text */}
      <div className="flex flex-col text-center gap-1  md:w-1/2 mb-4 md:mb-0">
        <h4 className="text-[#0b0335] font-bold text-lg">
          SIGN UP FOR OUR NEWSLETTER
        </h4>
        <p className="text-[#0b0335] text-sm">
          Receive our latest updates about our products & promotions.
        </p>
      </div>

      {/* Newsletter Form */}
      <div className="flex justify-center w-full md:w-1/2 mt-4 md:mt-0">
        <input
          type="email"
          placeholder="enter your email address"
          className="h-12 px-4 w-full border-2 border-gray-300 rounded-md text-sm outline-none"
        />
        <button className="ml-2 font-bold h-12 px-6 bg-[#0b0335] text-white rounded-md hover:bg-gray-800 transition ease-in-out">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
