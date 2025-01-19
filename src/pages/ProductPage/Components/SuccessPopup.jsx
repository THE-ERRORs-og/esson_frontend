import QuoteButton from "@/components/Button/QuoteButton";
import React from "react";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your request has been submitted successfully!!!
        </h2>
        <QuoteButton text="Close"
          onClick={onClose}
          
        >
          Close
        </QuoteButton>
      </div>
    </div>
  );
};

export default SuccessPopup;
