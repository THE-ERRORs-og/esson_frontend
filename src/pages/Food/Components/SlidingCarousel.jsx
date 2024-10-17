"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  headphone,
  watch,
  b1,
  cloth,
  electronics,
} from "../../../assets/images";
import { useNavigate } from "react-router-dom";

export function SlidingCarousel({ titleText, products }) {
  const navigate = useNavigate();
  console.log(products);
  const cards = products.map((card, index) => (
    <div onClick={()=>{
      navigate(`/product-page/${card.id}`);
    }}>
      <Card key={card.id} card={card} index={index} />
    </div>
  ));

  return (
    <div className="w-full h-full py-2 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {titleText}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
