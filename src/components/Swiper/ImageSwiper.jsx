import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slide1,slide2,slide3,slide4,slide5 } from "@/assets/images";

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
      <div className="mb-8 md:h-[600px] h-[400px]">
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
          className="mySwiper"
        >
          {listings.map(({ id, imgUrl, alt }) => (
            <SwiperSlide key={id}>
              <div className="w-full relative md:h-[600px] h-[400px]">
                <img
                  src={imgUrl}
                  alt={alt}
                  className="h-full w-full  object-cover overflow-hidden"
                />
                <p className="text-[#f1faee] absolute left-0 top-0 font-medium max-w-[90%] bg-[#6b8198] shadow-lg opacity-90 p-2 rounded-br-3xl">
                  Read More!
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
}
