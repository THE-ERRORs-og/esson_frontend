import React from 'react';
import { FoodCard } from './FoodCard';
import FoodSlider from './FoodSlider';

const Food = () => {
  return (
    <div>
      <FoodSlider />
      <SlidingCarousel titleText="Trending Now"/>
      <FoodSlider />
      <SlidingCarousel titleText="Shop Now"/>
      
    </div>
  );
}

export default Food;
