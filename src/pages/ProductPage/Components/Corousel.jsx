import React from "react";
import { cloth, headphone } from "@/assets/images";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Corousel = ({ images }) => {
  return (
    <Carousel className="w-auto">
      {images.map((image , idx) => (
        <div key={idx}>
          <img src={image} />
          <p className="legend">Legend 1</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Corousel;
