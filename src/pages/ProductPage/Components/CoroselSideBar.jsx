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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SizeDropdown from "./SizeDropDown";
import Selector from "./Selectors";
import QuantitySelector from "./Quantity";

const CoroselSideBar = ({product}) => {
  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl">{product.name}</h1>
      <h3 className="font-bold text-xl my-4">from $0.870 / unit</h3>
      <div>
        <Button className="bg-red-400"> Esson* New Offer Unlocked</Button>
      </div>
      <p className="flex flex-wrap my-5">
        {product.description}
      </p>

      <div className="my-4">
        {product.tags.map((tag,idx) => (
          <Button key={idx} className="bg-gray-300 text-black mx-1 my-2 rounded-full ">
          {" "}
          {tag}
        </Button>
        ))}
      </div>

      <div className="mb-6">
        <h1>Estimated Arrival:</h1>
        <Button className="bg-gray-300 text-black mx-1 my-4 rounded-full ">
          <FaTruck className=" mx-2 text-3xl"></FaTruck>{" "}
          {"  Standard (Free): Oct 28 - Oct 30"}
        </Button>
        <p className="text-sm">
          *shipping availability and shipping windows temporarily affected, see
          checkout for updated timelines.
        </p>
      </div>
      <hr />

      <div>
        <div className="flex ">
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
        <SizeDropdown sizeValues={product.size} />
      </div>

      <Selector />
      <QuantitySelector />
    </div>
  );
};

export default CoroselSideBar;
