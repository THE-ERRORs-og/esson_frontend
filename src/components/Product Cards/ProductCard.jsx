import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import QuoteButton from "../Button/QuoteButton";

const ProductCard = ({ product, productImg, productDesc, productName, stockText,soldText }) => {
  const navigate = useNavigate();
  return (
    <div className="p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-2 h-[200px] w-full object-cover rounded-2xl"
          src={productImg}
          alt="product image"
        />
      </a>
      <div className="w-full px-5 pb-2 space-y-4">
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productName} <br />
           
          </h5>
          <p className="text-sm font-semibold text-black">{productDesc}</p>{" "}
        </a>
        <p className="text-xs  text-black font-thin">{soldText}</p>{" "}
        <p className="text-lg font-bold text-red-500">
          {stockText}
        </p>

       
        
          <QuoteButton isfull="w-full" text="Request a quote" onClick ={()=>{
            navigate(`/product-page/${product.id}`);
          }}/>
      
      </div>
    </div>
  );
};

export default ProductCard;
