"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import about from "@/public/img/HomeOne/about.png";
import shuffle1 from "@/public/img/HomeOne/shuffle1.png";
import Image from "next/image";
const Slider = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image src={about} alt="Slide 1" className="rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-lime-500 text-black rounded-full px-6 py-3 text-sm font-medium">
                View Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={shuffle1}
              alt="Slide 2"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-lime-500 text-black rounded-full px-6 py-3 text-sm font-medium">
                View Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={shuffle1}
              alt="Slide 2"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-lime-500 text-black rounded-full px-6 py-3 text-sm font-medium">
                View Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={shuffle1}
              alt="Slide 2"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-lime-500 text-black rounded-full px-6 py-3 text-sm font-medium">
                View Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
