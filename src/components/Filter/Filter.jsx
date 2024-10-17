
import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import { Selector } from "./Selector";

const Filter = ({ showFilterDrawer }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-1000 ease-in-out ${
        showFilterDrawer ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } flex flex-col space-y-4 md:flex-row items-center justify-evenly md:p-6 md:ml-8 md:mt-10 border-t`}
      style={{ transitionProperty: "max-height, opacity" }} // Ensure both properties animate smoothly
    >
        
      <PriceRangeSlider />
      <Selector />
      <Selector />
      <Selector />
    </div>
  );
};

export default Filter;
