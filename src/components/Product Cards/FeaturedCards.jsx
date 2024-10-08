import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FeaturedCards = ({image, name}) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar>
        <AvatarImage src={image} className="object-cover" />
        <AvatarFallback>Product</AvatarFallback>
      </Avatar>
      <h1 className="text-md font-semibold text-center py-2">{name}</h1>
    </div>
  );
};

export default FeaturedCards;