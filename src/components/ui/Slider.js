"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

import about from "@/public/img/HomeOne/about.png";
import shuffle from "@/public/img/HomeOne/shuffle.png";
import shuffle2 from "@/public/img/HomeOne/shuffle2.png";
import shuffle3 from "@/public/img/HomeOne/shuffle3.png";
import Image from "next/image";
import Link from "next/link";
const Slider = () => {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  return (
    <div className="relative">
      <Swiper
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setIsEnd(
            realIndex === swiper.slides.length - swiper.loopedSlides - 1
          );
          setIsBeginning(realIndex === 0);
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 220,
          depth: 500,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        breakpoints={{
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {[about, shuffle, shuffle2, shuffle3, shuffle].map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-full">
              {/* Ensure image is aligned */}
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain"
              />

              {/* Button overlaid centrally */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/"
                  className="flex items-center justify-center sm:w-[120px] w-[100px] sm:h-[120px] h-[100px] rounded-full bg-primary sm:text-base text-[12px] leading-4 font-medium text-secondary"
                >
                  View Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`flex items-center justify-center absolute left-0 top-1/2 z-10 h-20 w-20 rounded-full ${
          isEnd ? "bg-black" : " bg-light"
        } `}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.08374 9.96932L7.75041 16.636C8.00041 16.886 8.33374 17.011 8.66707 17.011C9.04207 17.011 9.37541 16.886 9.62541 16.636C10.1671 16.136 10.1671 15.261 9.62541 14.761L5.25041 10.3443H18.0004C18.7504 10.3443 19.3337 9.76099 19.3337 9.01099C19.3337 8.30265 18.7504 7.67765 18.0004 7.67765H5.25041L9.62541 3.30265C10.1671 2.80265 10.1671 1.92765 9.62541 1.42765C9.12541 0.885986 8.25041 0.885986 7.75041 1.42765L1.08374 8.09432C0.542073 8.59432 0.542073 9.46932 1.08374 9.96932Z"
            fill="white"
          />
        </svg>
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={` w-20 h-20 rounded-full absolute right-0 top-1/2 z-10 flex items-center justify-center ${
          isBeginning ? "bg-black" : "bg-light"
        }`}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9163 9.96932L12.2496 16.636C11.9996 16.886 11.6663 17.011 11.3329 17.011C10.9579 17.011 10.6246 16.886 10.3746 16.636C9.83293 16.136 9.83293 15.261 10.3746 14.761L14.7496 10.3443H1.99959C1.24959 10.3443 0.66626 9.76099 0.66626 9.01099C0.66626 8.30265 1.24959 7.67765 1.99959 7.67765H14.7496L10.3746 3.30265C9.83293 2.80265 9.83293 1.92765 10.3746 1.42765C10.8746 0.885986 11.7496 0.885986 12.2496 1.42765L18.9163 8.09432C19.4579 8.59432 19.4579 9.46932 18.9163 9.96932Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
