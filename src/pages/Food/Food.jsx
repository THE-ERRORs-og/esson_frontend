import React, { useState } from 'react';
import { FoodCard } from './FoodCard';
import FoodSlider from './FoodSlider';
import { SlidingCarousel } from './Components/SlidingCarousel';
import { HeroCard } from './Components/HeroCard';
import { headphone, watch, b1 } from "../../assets/images";


const Food = () => {
  

  return (
    <div>
   

      <div className="flex p-6 h-full flex-col md:flex-row justify-between items-center">
        <HeroCard image={watch} productName="Food Box" price="20 $ / piece" />
        <HeroCard image={b1} productName="Food glass" price="20 $ / piece" />
      </div>

      <FoodSlider />
      <SlidingCarousel titleText="Trending Now" />
      <FoodSlider />
      <SlidingCarousel titleText="Shop Now" />
    </div>
  );
};

export default Food;
