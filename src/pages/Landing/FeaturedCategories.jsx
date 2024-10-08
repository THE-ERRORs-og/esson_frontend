import FeaturedCards from '@/components/Product Cards/FeaturedCards'
import React from 'react'
import { cloth, watch } from "../../assets/images";


const FeaturedCategories = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold py-8'>Featured Categories</h1>
        <div className='flex p-4 space-x-4 justify-evenly md:flex-row'>
            <FeaturedCards image = {cloth} name= "Cloth"/>
            <FeaturedCards image = {watch} name= "Watch"/>
          
        </div>
    </div>
   
  )
}

export default FeaturedCategories
