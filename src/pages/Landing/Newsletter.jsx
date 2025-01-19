import QuoteButton from "@/components/Button/QuoteButton";
import { Button } from "@/components/ui/button";
import React from "react";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="flex w-full justify-center items-start  flex-col bg-[#f5f5f5]"
    >
      {/* Newsletter Text */}
      <div className="flex flex-col gap-1 md:mb-0">
        <h4 className="text-[#0b0335] font-bold text-3xl">
          SIGN UP FOR OUR NEWSLETTER
        </h4>
        <p className="text-[#696969] text-xl">
          Receive our latest updates about our products & promotions.
        </p>
      </div>

      {/* Newsletter Form */}
      <div className="flex justify-center items-center space-x-2 w-full mt-4 md:mt-0">
        <input
          type="email"
          placeholder="enter your email address"
          className="h-12 px-4 w-full border-2 border-gray-300 rounded-md text-sm outline-none"
        />
        {/* <button className="ml-2 font-bold h-12 px-6 bg-[#0b0335] text-white rounded-md hover:bg-gray-800 transition ease-in-out">
          Submit
        </button> */}
        <QuoteButton text="Submit" />
      </div>
    </section>
  );
};

export default Newsletter;
