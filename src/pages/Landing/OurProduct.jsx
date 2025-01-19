import ProductCard from "@/components/Product Cards/ProductCard";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OurProduct = ({ productData }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="md:flex  justify-center text-4xl font-bold py-8">
        Our Products
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {productData.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            productImg={product.images.length > 0 ? product.images[0] : noimage}
            productDesc={truncateDescription(product.description, 60)} // Example: limit to 60 characters
            productName={product.name}
            soldText="200+ units already sold in a month"
            stockText="Only few left in stock"
          />
        ))}
      </section>
      <div onClick={()=>{
        navigate("/product?category=all");
      }} className="flex items-center border-black justify-center border-[1px] py-2 border-w-thin rounded-xl lg:w-1/6  space-x-2  ">
        <p className="text-black md:text-2xl text-sm rounded-2xl font-semibold">
          See more
        </p>
        <FaArrowRight className="text-2xl" />
      </div>
    </div>
  );
};

// Helper function to truncate the description
const truncateDescription = (desc, maxLength) => {
  if (desc.length > maxLength) {
    return desc.substring(0, maxLength) + "...";
  }
  return desc;
};

export default OurProduct;
