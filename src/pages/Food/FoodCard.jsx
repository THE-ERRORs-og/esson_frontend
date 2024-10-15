"use client";
import { cn } from "@/lib/utils";
import { headphone } from "../../assets/images";

export function FoodCard({image, tagName ,quantityLimit, deliveryTime, productName, price,unit ,productId='fc01'}) {
  return (
    <div className="max-w-xs w-full md:w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-3xl shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-cover`
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
        <div className="flex  flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col px-2 py-1 text-center rounded-2xl bg-white">
            <p className="font-normal text-xs text-black relative z-10">
              {tagName}
            </p>
          </div>
          
        </div>
        <div className="text content rounded-xl p-2 z-20 bg-white/50 shadow-lg ring-1 ring-black/5">
          <div className=" text-[14px] sm:flex items-center flex-wrap leading-[18px]">
            <span>{quantityLimit}</span>
            <span className="text-[18px] px-2">·</span>
            <span>{deliveryTime}</span>
          </div>

          <h1 className="font-semibold text-md md:text-lg text-black relative z-10">
            {productName}
          </h1>
          <p className="text-boulder text-[14px] lg:text-[16px]">
            from&nbsp;
            <span className=" lg:group-hover:text-pitaya">
              <span className="font-semibold">{price}</span>&nbsp;{unit}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
