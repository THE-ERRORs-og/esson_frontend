import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { electronics, headphone,watch } from '@/assets/images';

const Slider = ({ productData }) => {
  return (
    <div className="hidden md:flex md:w-1/3 m-5 p-4 h-[400px] w-1/3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center flex justify-center items-center bg-[url('/path/to/your/image1.jpg')]">
            <img src={electronics} alt="" className="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center flex justify-center items-center bg-[url('/path/to/your/image2.jpg')]">
            <img src={headphone} alt="" className="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center flex justify-center items-center bg-[url('/path/to/your/image3.jpg')]">
            <img src={watch} alt="" className="" />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
