import * as React from "react";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";


import { noimage, p1} from "../../assets/images";
import ProductCard from "@/components/Product Cards/ProductCard";
import Slider from "@/components/Product Cards/Slider";
import ProductBanner from "@/components/Banner/ProductBanner";

const Categories = ({imgUrl, category,productData}) => {
  return (
    <div>
     
      <ProductBanner imgUrl={imgUrl} categoryName={category} linkName = {`Shop more ${category}`}/>
      <hr />
      <div className="flex justify-center gap-16 p-2">
       
        {/* <Slider productData={productData} /> */}
        <CarouselSize productData={productData} />
      </div>
    </div>
  );
};

export default Categories;

const CarouselSize = ({productData}) => {
  return (
    <div className="w-full flex items-center pb-6">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {productData.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <ProductCard
                product={product}
                productImg={
                  product.images.length > 0 ? product.images[0] : noimage
                }
                productDesc={truncateDescription(product.description, 60)} // Example: limit to 100 characters
                productName={product.name}
                price="$599"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};


// Helper function to truncate the description
const truncateDescription = (desc, maxLength) => {
  if (desc.length > maxLength) {
    return desc.substring(0, maxLength) + '...';
  }
  return desc;
};