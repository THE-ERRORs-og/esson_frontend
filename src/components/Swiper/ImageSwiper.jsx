import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slide1,slide2,slide3,slide4,slide5 } from "@/assets/images";
import { FaArrowRight } from "react-icons/fa";

export default function ImageSwiper() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Define listings array with individual image imports
    const images = [
      { id: 1, imgUrl: slide1, alt: "Clothing" },
      { id: 2, imgUrl: slide2, alt: "Electronics" },
      { id: 3, imgUrl: slide3, alt: "Headphone" },
      { id: 4, imgUrl: slide4, alt: "Watch" },
      { id: 5, imgUrl: slide5, alt: "Watch" },
    ];
    setListings(images); // Populate the state
  }, []);

  return (
    listings.length > 0 && (
      <div className="mb-8  md:h-[400px] h-[300px] rounded-lg">
        <Swiper
        style={{
          "--swiper-pagination-color": "#C62300",
          "--swiper-pagination-bullet-inactive-color": "#F8FAFC",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "4px"
        }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper rounded-lg"
        >
          {listings.map(({ id, imgUrl, alt }) => (
            <SwiperSlide key={id}>
              <div className="w-full rounded-2xl relative md:h-[400px] h-[300px]">
                <img
                  src={imgUrl}
                  alt={alt}
                  className="rounded-lg h-full w-full  object-cover overflow-hidden"
                />
                <div className="flex items-center justify-center absolute space-x-2 right-10 bottom-6 max-w-[90%] ">
                <p className="text-black text-2xl rounded-lg font-semibold">
                  See more
                </p>
                <FaArrowRight className="text-2xl" />
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
}
