import React from 'react';
import Hero from './Hero';
import Catalouge from './Catalouge';
import Categories from './Categories';
import FeaturedCategories from './FeaturedCategories';
import Newsletter from './Newsletter';
import Services from './Services';
import PromoBanner from '@/components/Promo/PromoBanner';

const Landing = () => {
  return (
    <main className="mt-[65px]">
        <section className="container mx-auto px-4 w-[90%]">
            {/* <h1 className="text-4xl font-bold text-center mt-10">Landing Page</h1> */}
            <Hero/>
            <Catalouge/>
            <Services />
            <Categories category="Food"/>
            <Categories category="Clothes"/>
            <PromoBanner/>
            <FeaturedCategories/>
          
        </section>
        <Newsletter/>
    </main>
  );
}

export default Landing;
