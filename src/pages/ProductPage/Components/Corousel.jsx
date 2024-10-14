import React from "react";
import { cloth, headphone } from "@/assets/images";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Corousel = () => {
  return (
      <Carousel className="w-auto">
        <div>
          <img src={cloth} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={headphone} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={cloth} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
  );
};

export default Corousel;
