import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Corousel from "./Components/Corousel";
import CoroselSideBar from "./Components/CoroselSideBar";
import AboutProduct from "./Components/AboutProduct";
import { queryProducts } from "@/data/queryProduct";

const ProductPage = () => {
  const { productId } = useParams();

  // Query the product using the queryProducts function
  const filteredProducts = queryProducts({ id: productId });
  const product = filteredProducts.length ? filteredProducts[0] : null;

  // States for dynamic values
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setSelectedType] = useState("Kraft");
  const [selectedPrintOption, setSelectedPrintOption] =
    useState("Inside and Outside");
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  useEffect(() => {
    console.log("selectedSize", selectedSize);
    console.log("selectedType", selectedType);
    console.log("selectedPrintOption", selectedPrintOption);
  }, [selectedSize, selectedType, selectedPrintOption]);

  const selectedPrice =
    selectedQuantity !== null ? product?.price[selectedQuantity]?.price : 0;

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

  // Handle adding product to cart
  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      selectedSize,
      selectedType,
      selectedPrintOption,
      selectedQuantity: product?.price[selectedQuantity]?.quantity || 0,
      price: selectedPrice,
    };

    // Here, you would typically add the item to your cart state or context
    console.log("Item added to cart:", cartItem);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* Carousel and AboutProduct Section */}
        <div className="w-[100%] lg:w-[60%]">
          {/* Carousel */}
          <Corousel
            className="w-full h-auto"
            images={product.images}
          />
  
          {/* Sidebar for mobile/tablet below the carousel */}
          <div className="block lg:hidden">
            <CoroselSideBar
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedPrintOption={selectedPrintOption}
              setSelectedPrintOption={setSelectedPrintOption}
              selectedQuantity={selectedQuantity}
              setSelectedQuantity={setSelectedQuantity}
              selectedPrice={selectedPrice}
              handleAddToCart={handleAddToCart}
            />
          </div>
  
          {/* AboutProduct Component */}
          <AboutProduct
            name={product.name}
            description={product.description}
            category={product.category}
            tags={product.tags}
            size={product.size}
          />
        </div>
  
        {/* Sidebar for larger screens on the right side */}
        <div className="hidden lg:block lg:w-[40%]">
          <CoroselSideBar
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPrintOption={selectedPrintOption}
            setSelectedPrintOption={setSelectedPrintOption}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            selectedPrice={selectedPrice}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
  
};

export default ProductPage;
