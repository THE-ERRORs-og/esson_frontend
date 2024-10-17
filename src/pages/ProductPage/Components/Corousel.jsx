import React from "react";
import { cloth, headphone } from "@/assets/images";
import { Carousel } from "react-responsive-carousel";
import { noimage } from "@/assets/images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Corousel = ({ images }) => {
  return (
    <Carousel className="w-auto">
      {images && images.length > 0 ? (
        images.map((image, idx) => (
          <div key={idx}>
            <img data-src={image}  />
            <p className="legend">{image.legend || `Legend ${idx + 1}`}</p>
          </div>
        ))
      ) : (
        <div>
          <img src={noimage} alt="No Image Available" />
          <p className="legend">No Image Available</p>
        </div>
      )}
    </Carousel>
  );
};

export default Corousel;
