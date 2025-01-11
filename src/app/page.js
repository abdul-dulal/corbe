"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SliderContent from "../components/ui/SliderContent";
import slider from "@/public/img/HomeOne/featureSlider.png";
import Image from "next/image";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div>
      <div className=" -mt-[112px] -z-[99]">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const formattedIndex = (index + 1).toString().padStart(2, "0");
              return `<span class="${className}">${formattedIndex}</span>`;
            },
          }}
        >
          <SwiperSlide>
            <SliderContent
              bgImg="/img/HomeOne/featureSlider.png"
              title="Building Brands"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent
              bgImg="/img/HomeOne/featureSlider.png"
              title="Our Strategy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
