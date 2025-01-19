import React from "react";
import Hero from "./Hero";
import Catalouge from "./Catalouge";
import Categories from "./Categories";
import FeaturedCategories from "./FeaturedCategories";
import Newsletter from "./Newsletter";
import Services from "./Services";
import PromoBanner from "@/components/Promo/PromoBanner";
import { queryProducts } from "@/data/queryProduct";
import ImageSwiper from "@/components/Swiper/ImageSwiper";
import ProductCard from "@/components/Product Cards/ProductCard";
import OurProduct from "./OurProduct";
import HowItsMade from "./HowItsMade";
import { p1, p2, p3 } from "@/assets/images";

const Landing = () => {
  const foodProducts = queryProducts({ category: "Food" });
  const clothProducts = queryProducts({ category: "Cloth" });

  return (
    <main className="mt-[65px]">
      
      <section className="container mx-auto px-4 w-[90%]">
        {/* <h1 className="text-4xl font-bold text-center mt-10">Landing Page</h1> */}
        <ImageSwiper />
        <Hero />
        
        {/* <Catalouge /> */}

        <OurProduct productData={foodProducts}/>
        
        <HowItsMade/>

        <Services />
        {foodProducts.length > 0 && (
          <Categories imgUrl={p1} category="Food" productData={foodProducts} />
        )}
        {clothProducts.length > 0 && (
          <Categories imgUrl={p3} category="Clothes" productData={clothProducts} />
        )}
        {/* <PromoBanner /> */}
        {/* <FeaturedCategories /> */}
        {/* <Catalouge /> */}
      </section>
      {/* <Newsletter /> */}
    </main>
  );
};

export default Landing;
