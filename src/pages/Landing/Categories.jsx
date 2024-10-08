import * as React from "react";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";


import { watch } from "../../assets/images";
import ProductCard from "@/components/Product Cards/ProductCard";
import Slider from "@/components/Product Cards/Slider";

const Categories = ({category}) => {
  return (
    <div>
      <h1 className="uppercase font-bold text-2xl text-justify py-4">{category}</h1>
      <hr />
      <div className="flex justify-center gap-16 p-2">
        {/* <img
          src="/src/assets/electronics.webp"
          alt=""
          className="hidden md:flex md:w-1/3 m-5"
        /> */}
        <Slider  />
        <CarouselSize />
      </div>
    </div>
  );
};

export default Categories;

const CarouselSize = () => {
  return (
    <div className="w-full md:w-[59%] flex items-center pb-6">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {/* <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div> */}

              <ProductCard
                productImg={watch}
                productDesc="Series 7 GPS, Aluminium Case, Starlight Sport"
                productName="Apple Watch"
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
