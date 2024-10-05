import React from 'react';
import Hero from './Hero';

const Landing = () => {
  return (
    <main className="mt-[65px]">
        <section className="container mx-auto px-4">
            {/* <h1 className="text-4xl font-bold text-center mt-10">Landing Page</h1> */}
            <Hero/>
        </section>
    </main>
  );
}

export default Landing;
