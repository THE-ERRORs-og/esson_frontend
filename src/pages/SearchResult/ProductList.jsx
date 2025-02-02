import { noimage } from '../../assets/images';
import ProductCard from '../../components/Product Cards/ProductCard';
import React from 'react';

const ProductList = ({products}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product, index) => (
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
  );
}

export default ProductList;

const truncateDescription = (desc, maxLength) => {
  if (desc.length > maxLength) {
    return desc.substring(0, maxLength) + "...";
  }
  return desc;
};
