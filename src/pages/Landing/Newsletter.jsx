import { Button } from "@/components/ui/button";
import React from "react";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="flex justify-between flex-wrap items-center bg-cover bg-no-repeat p-8 bg-gray-400"
      
    >
      {/* Newsletter Text */}
      <div className="newstext">
        <h4 className="text-white font-bold text-lg">Sign Up For Newsletter</h4>
        <p className="text-white font-bold text-sm">
          Get email updates about our latest products and{" "}
          <span className="text-pink-200">Special offers</span>
        </p>
      </div>

      {/* Newsletter Form */}
      <div className="form flex justify-center w-full md:w-2/5 mt-4 md:mt-0">
        <input
          type="email"
          placeholder="Type Your Email ID"
          className="h-12 px-4 w-full border-2 border-blue-700 rounded-md text-sm outline-none"
        />
        <button className="ml-2 font-bold w-1/4 md:w-1/4  text-xs md:py-3 px-4 rounded-3xl bg-teal-600 text-white  hover:bg-teal-800 transition ease-in-out">
          Sign Up
        </button>
       
        {/* <Button className= "bg-gradient-to-r from-red-500 to-orange-500 font-bold w-1/2 md:w-1/2 text-white text-xs md:py-3 px-4 rounded-3xl hover:bg-pink-600">Sign Up</Button> */}
      </div>
    </section>
  );
};

export default Newsletter;
