import ProductCard from "@/components/Product Cards/ProductCard";
import React from "react";

const OurProduct = ({ productData }) => {
  return (
    
    <div>
        <h1 className='md:flex hidden justify-center text-4xl font-bold py-8'>Our Products</h1>
      <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
       
       {productData.slice(0, 4).map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          productImg={
            product.images.length > 0 ? product.images[0] : noimage
          }
          productDesc={truncateDescription(product.description, 60)} // Example: limit to 60 characters
          productName={product.name}
          price="$599"
        />
      ))}
    </section>
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
