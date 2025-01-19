import React from "react";
import { Button } from "@/components/ui/button";
import { TruckIcon } from "lucide-react";
import { FaTruck } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import SizeDropdown from "./SizeDropDown";
import Selector from "./Selectors";
import QuantitySelector from "./Quantity";

const CoroselSideBar = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedType,
  setSelectedType,
  selectedPrintOption,
  setSelectedPrintOption,
  selectedQuantity,
  setSelectedQuantity,
  handleRequestAQuote,
}) => {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-3xl">{product.name}</h1>
      <h3 className="font-bold text-xl mt-2">from $0.870 / unit</h3>

      <div className="mt-2 flex flex-wrap gap-4">
        {product.tags.map((tag, idx) => (
          <span
            key={idx}
            className="flex items-center justify-center bg-gray-300 px-3 pt-2 pb-1 text-center text-black text-sm rounded-full leading-none"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="flex flex-wrap mt-2">{product.description}</p>

      {/* <hr /> */}

      <div className="w-full mt-2">
        <div className="flex text-lg font-semibold mb-3 ">
          <h1>Size (LxWxH) </h1>
          <Popover>
            <PopoverTrigger className="mx-3 self-center">
              <QuestionMarkCircledIcon></QuestionMarkCircledIcon>
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              {
                "Size: Length (L) x Width (W) x Height (H). Dimensions represent finished/closed state. For visual reference see size diagrams. Production can vary by +/- 5%."
              }
            </PopoverContent>
          </Popover>
        </div>
        <SizeDropdown
          sizeValues={product.size}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>

      <Selector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedPrintOption={selectedPrintOption}
        setSelectedPrintOption={setSelectedPrintOption}
      />

      <QuantitySelector
        options={product.price}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <button className="mt-2 w-full flex justify-center items-center gap-2.5 pl-[3.625rem] pr-[3.625rem] p-2 rounded-xl bg-[#002153] text-white  font-medium leading-[normal]" onClick={handleRequestAQuote}>
        Request a quote
      </button>
    </div>
  );
};

export default CoroselSideBar;
