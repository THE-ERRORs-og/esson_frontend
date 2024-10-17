"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { headphone,watch, b1 , cloth, electronics} from "../../../assets/images";

export function SlidingCarousel({titleText,products}) {
  console.log(products);
  const cards = products.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-2 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {titleText}
      </h2>
      <Carousel items={cards}  />
    </div>
  );
}


const data = [
  {
    category: "Paper Shopping Bags",
    title: "The Best In Quality.",
    src: headphone,
  
  },
  {
    category: "Paper Glass",
    title: "Enhance your productivity.",
    src: watch,
   
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: b1
  
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: cloth,
   
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: electronics,

  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
];
