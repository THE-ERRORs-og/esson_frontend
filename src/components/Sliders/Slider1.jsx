import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { headphone, watch, b1, noimage } from "../../assets/images";
import { FoodCard } from "@/pages/Food/FoodCard";
import { useNavigate } from "react-router-dom";

export default function ProductSlider({ products = [] }) {
    const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="p-4 lg:p-10">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1} // Default to 1 slide on mobile
        spaceBetween={16} // Smaller space for mobile
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full mx-auto"
        breakpoints={{
          // Mobile breakpoints
          505: {
            slidesPerView: 2, // 1 slide per view on small tablets
            spaceBetween: 10,
          },
          605: {
            slidesPerView: 2, // 1 slide per view on small tablets
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 2, // 1 slide per view on small tablets
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // 2 slides per view on tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on small desktops
            spaceBetween: 30,
            // centeredSlides: true, // Enable centered slides for larger screens
          },
          1280: {
            slidesPerView: 4, // 4 slides per view on large desktops
            spaceBetween: 40,
            // centeredSlides: true, // Enable centered slides for larger screens
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} onClick={()=>{
            navigate(`/product-page/${product.id}`);
          }}>
            <FoodCard
              image={product.images.length > 0 ? product.images[0] : noimage}
              tagName="Popular"
              quantityLimit="Min. 25 units"
              deliveryTime="Delivery: 3 Weeks"
              productName={product.name}
              price=" $0.87"
              unit="per unit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
