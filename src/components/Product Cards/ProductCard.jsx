import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, productImg, productDesc, productName, price }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-2 h-52 object-cover rounded-t-lg"
          src={productImg}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 space-y-4">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName} <br />
            <span className="text-sm text-gray-400">{productDesc}</span>{" "}
          </h5>
        </a>
        
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>

        <div className="flex items-center">
          <Button variant="outline" className="w-full uppercase" onClick ={()=>{
            navigate(`/product-page/${product.id}`);
          }} >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
