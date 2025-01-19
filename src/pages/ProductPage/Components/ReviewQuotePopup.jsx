import React, { useState } from "react";
import Swal from "sweetalert2";
import { RxCross1 } from "react-icons/rx";
import QuoteButton from "@/components/Button/QuoteButton";

const ReviewQuotePopup = ({
  product,
  selectedSize,
  selectedType,
  selectedPrintOption,
  selectedQuantity,
  onConfirm,
  onClose,
}) => {
  // State to manage product specification input field
  const [productSpecification, setProductSpecification] = useState("");
  const [email, setEmail] = useState(""); // State to manage email input
  const [mobileNumber, setMobileNumber] = useState(""); // State to manage mobile number input

  // Extract quantity and unit price based on the selected quantity
  const quantity = product.price[selectedQuantity].quantity;
  const unit_price = product.price[selectedQuantity].unit_price;
  const total_price = quantity * unit_price; // Calculate total price

  // Handle form submission
  const handleSubmit = async () => {
    // Validate that all required options are selected
    if (
      !selectedQuantity ||
      !selectedSize ||
      !selectedType ||
      !selectedPrintOption ||
      !email ||
      !mobileNumber
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields before submitting!",
      });
      return;
    }

    // Prepare data to send to the backend
    const data = {
      productId: product.id,
      product: product.name,
      size: selectedSize,
      type: selectedType,
      print_option: selectedPrintOption,
      quantity: quantity,
      unit_price: unit_price,
      total_price: total_price,
      specifications: productSpecification,
      email: email,
      mobileNumber: mobileNumber,
    };

    // Send the data to the backend
    const success = await sendDataToAPI(data);
    if (success) {
      onConfirm(); // Trigger callback on successful submission
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send quote request. Please try again later.",
      });
    }
  };

  // Function to handle API call for submitting data
  const sendDataToAPI = async (formData) => {
    const server_url = import.meta.env.VITE_SERVER_URL; // Load server URL from environment variables
    try {
      const response = await fetch(
        server_url + "/esson_mail/send-quote-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Log success message
        return true;
      } else {
        console.log("Failed to send contact form data."); // Log failure
        return false;
      }
    } catch (error) {
      console.error("Error:", error); // Handle and log error
      return false;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative">
        {/* Header */}
        <h2 className="text-3xl font-medium text-gray-800 text-center mb-4">
          Review your quote request
        </h2>

        <RxCross1
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
        />

        <div className="">
          <div className="flex space-x-3">
            {/* Product Image */}

            <img
              src={product.images[0]}
              alt={product.name}
              className="w-1/2 object-contain rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-black mb-4">
                from ${unit_price.toFixed(2)}/unit
              </p>
              <p className="text-xs text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="text-gray-700 text-sm mb-4">
                {/* <div className="flex justify-between">
                  <span className="font-semibold">Unit Price:</span>
                  <span>${unit_price.toFixed(2)}</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="font-semibold">Total Price:</span>
                  <span>${total_price.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <div className="flex justify-around space-x-3 items-center ">
                  <button
                    className={`pt-2 pb-1 w-full px-6 rounded-lg text-center text-sm font-medium transition duration-300 ${"bg-white border border-gray-300 hover:bg-gray-100"}`}
                  >
                    {selectedSize}
                  </button>
                  <button
                    className={`pt-2 pb-1 px-6  w-full  rounded-lg text-center text-sm font-medium transition duration-300 ${"bg-white border border-gray-300 hover:bg-gray-100"}`}
                  >
                    {selectedType}
                  </button>
                  <button
                    className={`pt-2 pb-1 px-6  w-full  rounded-lg text-center text-sm font-medium transition duration-300 ${"bg-white border border-gray-300 hover:bg-gray-100"}`}
                  >
                    {quantity}
                  </button>
                </div>
                <div className=" flex justify-center items-center">
                <button
                  className={`pt-2 pb-1 w-full px-6 rounded-lg text-center text-sm font-medium transition duration-300 ${"bg-white border border-gray-300 hover:bg-gray-100"}`}
                >
                  {selectedPrintOption}
                </button>
                </div>
              

                {/* <div className="font-semibold">Size:</div>
                <div>{selectedSize}</div> */}
                {/* <div className="font-semibold">Type:</div>
                <div>{selectedType}</div>
                <div className="font-semibold">Print Option:</div>
                <div>{selectedPrintOption}</div>
                <div className="font-semibold">Quantity:</div>
                <div>{quantity}</div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="mobile-number"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              id="mobile-number"
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none text-sm"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        {/* Product Specification */}
        <div className="mt-6">
          <label
            htmlFor="product-specification"
            className="block text-gray-700 font-semibold mb-2"
          >
            Product specification
          </label>
          <textarea
            id="product-specification"
            rows="4"
            value={productSpecification}
            onChange={(e) => setProductSpecification(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none text-sm"
            placeholder="Enter product specifications..."
          ></textarea>
        </div>

        {/* Confirm Button */}
        <div className="mt-6 flex justify-center">
          <QuoteButton
          text="Confirm Request"
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
          >
            Confirm Request
          </QuoteButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewQuotePopup;
