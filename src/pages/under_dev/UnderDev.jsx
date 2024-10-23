import React from 'react'
import { Link } from 'react-router-dom'  // Assuming you're using React Router

const UnderDev = () => {
  return (
    <main className=" flex items-center justify-center h-[calc(100vh-65px)] bg-gray-100">
      <section className="text-center mx-auto max-w-[1140px]">
        <h1 className="text-6xl font-bold text-[#f14d43]">🚧</h1>
        <h2 className="text-3xl font-semibold my-4 text-gray-800">
          Website Under Development
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you a great experience. Stay tuned for updates!
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#f14d43] text-white rounded-full hover:bg-[#fa8c3c] transition duration-300"
        >
          Visit Again
        </Link>
      </section>
    </main>
  )
}

export default UnderDev
