import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Corousel from "./Components/Corousel";
import CoroselSideBar from "./Components/CoroselSideBar";
import AboutProduct from "./Components/AboutProduct";
import { queryProducts } from "@/data/queryProduct";
import SuccessPopup from "./Components/SuccessPopup";
import ReviewQuotePopup from "./Components/ReviewQuotePopup";
import Swal from "sweetalert2";

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

  // States for popup visibility
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    console.log("selectedSize", selectedSize);
    console.log("selectedType", selectedType);
    console.log("selectedPrintOption", selectedPrintOption);
    console.log("selected quantity", selectedQuantity);
  }, [selectedSize, selectedType, selectedPrintOption, selectedQuantity]);

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
  const handleRequestAQuote = () => {
    if(!selectedQuantity || !selectedSize || !selectedType || !selectedPrintOption){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select all options before submitting!',
          });
          return;
        }
    setShowReviewPopup(true);
  };

  const handleConfirmRequest = () => {
    setShowReviewPopup(false);
    setShowSuccessPopup(true);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Carousel and AboutProduct Section */}
        <div className="w-[100%] lg:w-[50%]">
          {/* Carousel */}
          <Corousel images={product.images} />

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
              handleRequestAQuote={handleRequestAQuote}
            />
          </div>

          {/* AboutProduct Component */}
          <AboutProduct desc={product.detailedDescription} />
        </div>

        {/* Sidebar for larger screens on the right side */}
        <div className="hidden lg:block w-[100%] lg:w-[50%]">
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
            handleRequestAQuote={handleRequestAQuote}
          />
        </div>
      </div>

      {/* Popups */}
      {showReviewPopup && (
        <ReviewQuotePopup
          product={product}
          selectedSize={selectedSize}
          selectedType={selectedType}
          selectedPrintOption={selectedPrintOption}
          selectedQuantity={selectedQuantity}
          onConfirm={handleConfirmRequest}
          onClose={() => setShowReviewPopup(false)}
        />
      )}
      {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
    </div>
  );
};

export default ProductPage;
