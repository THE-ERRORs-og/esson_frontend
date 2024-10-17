import React from "react";
import { useParams } from "react-router-dom";
import Corousel from "./Components/Corousel";
import CoroselSideBar from "./Components/CoroselSideBar";
import AboutProduct from "./Components/AboutProduct";
import {queryProducts} from "@/data/queryProduct"; 

const ProductPage = () => {
  const { productId } = useParams();

  // Query the product using the queryProducts function
  const filteredProducts = queryProducts({ id: productId });
  const product = filteredProducts.length ? filteredProducts[0] : null;

  // If no product is found, show a custom "Product Not Found" div
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The product you are looking for does not exist or has been
            removed.
          </p>
          <a
            href="/"
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="w-[100%]">
          {/* Pass the product data to Corousel */}
          <Corousel className="w-[60%]" images={product.images} />

          {/* Pass the product data to AboutProduct */}
          <AboutProduct
            name={product.name}
            description={product.description}
            category={product.category}
            tags={product.tags}
            size={product.size}
          />
        </div>
        {/* Pass the product data to CoroselSideBar if needed */}
        <CoroselSideBar className="" product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
