import FeaturedCards from '@/components/Product Cards/FeaturedCards'
import React from 'react'
import { cloth, watch } from "../../assets/images";
import { useNavigate } from 'react-router-dom';


const FeaturedCategories = () => {
  const navigate = useNavigate();
  const onClick = (page) =>{
    navigate(`/product?category=${page}`);
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-8">
        Featured Categories
      </h1>
      <div className="flex p-4 space-x-4 justify-evenly md:flex-row">
        <FeaturedCards image={cloth} name="Cloth" onClick={onClick} />
        <FeaturedCards image={watch} name="Food" onClick={onClick} />
      </div>
    </div>
  );
}

export default FeaturedCategories
