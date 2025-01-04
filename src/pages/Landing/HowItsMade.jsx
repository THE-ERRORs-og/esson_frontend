import React from 'react'
import { p2 } from '@/assets/images'
const HowItsMade = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
    {/* Image Section */}
    <div className="w-full md:w-1/2">
    <img
          className="object-cover rounded-t-lg"
          src={p2}
          alt="product image"
        />
      {/* <div className="w-full h-64 bg-gray-300"></div> */}
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">HOW IT'S MADE?</h2>
      <p className="text-gray-700 text-sm md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  </section>
  )
}

export default HowItsMade
