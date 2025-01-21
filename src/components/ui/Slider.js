"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import about from "@/public/img/HomeOne/about.png";
import leftShuffle from "@/public/img/HomeOne/leftshuffle1.png";
import leftShuffle2 from "@/public/img/HomeOne/leftshuffle2.png";
import rightShuffle from "@/public/img/HomeOne/rightshuffle.png";
import rightShuffle2 from "@/public/img/HomeOne/rightshuffle2.png";
import Image from "next/image";
const Slider = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 170,
          depth: 500,
          modifier: 1,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {[leftShuffle, leftShuffle2, about, rightShuffle, rightShuffle2].map(
          (src, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image src={src} alt={`Slide ${index + 1}`} className="" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-lime-500 text-black rounded-full h-[60px] w-[60px] flex items-center justify-center text-sm font-medium">
                    View Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
