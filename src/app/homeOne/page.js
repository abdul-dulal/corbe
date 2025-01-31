"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import path from "@/public/img/HomeOne/layer.png";
import design from "@/public/img/HomeOne/graphic-desing.png";

import blog1 from "@/public/img/HomeOne/b1.png";
import blog2 from "@/public/img/HomeOne/b2.png";
import blog3 from "@/public/img/HomeOne/b3.png";

import BlogContent from "@/src/components/ui/BlogContent";
import ReviewSliderContent from "@/src/components/ui/ReviewSliderContent";
import Slider from "@/src/components/ui/Slider";
import SliderContent from "@/src/components/ui/SliderContent";
import Review from "@/src/components/ui/Review";
import ButtonMore from "@/src/components/ui/ButtonMore";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutShuffle from "@/src/components/ui/AboutShuffle";

const HomeOne = () => {
  const swiperRef = useRef(null);

  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [activeIndex, setActiveIndex] = useState(0);

  const visions = [
    {
      id: 1,
      title: "Seo",
      title2: "Expert",
      svg: (
        <svg
          className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.3313 15.5897L37.0162 3.83826C34.4825 2.21326 30.5162 2.21326 27.9839 3.83826L9.67011 15.5911C7.18793 17.1836 5.31647 20.6083 5.31647 23.5576V56.5871C5.31647 59.9468 8.05053 62.6809 11.4102 62.6809H53.5898C56.9495 62.6809 59.6836 59.9468 59.6836 56.5871V23.5576C59.6836 20.6069 57.8121 17.1836 55.3313 15.5897ZM55.6211 56.5858C55.6211 57.7056 54.7097 58.617 53.5898 58.617H11.4102C10.2903 58.617 9.37897 57.7056 9.37897 56.5858V23.5576C9.37897 22.0125 10.5639 19.8445 11.8639 19.0103L30.1776 7.25753C30.7856 6.86753 31.6428 6.67253 32.5 6.67253C33.3572 6.67253 34.2144 6.86753 34.8211 7.25753L53.1362 19.009C54.4375 19.8432 55.6211 22.0112 55.6211 23.5563V56.5858ZM32.5 30.1876C24.8733 30.1876 18.6699 36.3924 18.6699 44.0177V53.2166C18.6699 54.3378 19.5786 55.2478 20.7012 55.2478C21.8238 55.2478 22.7324 54.3378 22.7324 53.2166V44.0177C22.7324 38.6309 27.1145 34.2488 32.5 34.2488C37.8855 34.2488 42.2676 38.6309 42.2676 44.0177V53.2166C42.2676 54.3378 43.1776 55.2478 44.2989 55.2478C45.4201 55.2478 46.3301 54.3378 46.3301 53.2166V44.0177C46.3301 36.3911 40.1267 30.1876 32.5 30.1876Z"
            fill="#0A0C00"
          />
        </svg>
      ),
      img: design,
    },
    {
      id: 2,
      title: "Graphic",
      title2: "Design",
      svg: (
        <svg
          className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_427)">
            <path
              d="M54.7165 16.0832C54.0435 15.184 52.7719 15.0026 51.8727 15.6729C50.9749 16.3459 50.7907 17.6188 51.4624 18.5166C54.5377 22.6292 56.1654 27.5259 56.1654 32.6785C56.1654 45.7286 45.5488 56.3453 32.4987 56.3453C19.4486 56.3453 8.83325 45.7286 8.83325 32.6785C8.83325 19.6284 19.4499 9.01173 32.5 9.01173C35.1379 9.01173 37.7136 9.46132 40.1809 10.309L36.3093 11.7444C35.2585 12.1344 34.7209 13.3031 35.1109 14.3553C35.4142 15.1745 36.1901 15.681 37.0148 15.681C37.2491 15.681 37.4888 15.6404 37.7203 15.5537L45.7925 12.5624C46.8434 12.1724 47.381 11.0037 46.991 9.95288L43.9996 1.87934C43.611 0.827151 42.4437 0.290901 41.3888 0.679546C40.3379 1.06955 39.8003 2.23819 40.1903 3.29038L41.3509 6.42392C38.5044 5.46246 35.5361 4.94923 32.5 4.94923C17.2101 4.94923 4.77075 17.3886 4.77075 32.6785C4.77075 47.9684 17.2101 60.4078 32.5 60.4078C47.7899 60.4078 60.2293 47.9684 60.2293 32.6785C60.2293 26.6416 58.3226 20.9027 54.7165 16.0832ZM32.4431 32.7218L24.1286 25.951C23.2592 25.2428 21.9795 25.3741 21.2713 26.2435C20.563 27.1142 20.6944 28.3926 21.5638 29.1008L31.2163 36.9631C31.5914 37.2664 32.0464 37.4181 32.5 37.4181C32.9821 37.4181 33.4642 37.2461 33.8488 36.9062L48.7934 23.6449C49.6329 22.9001 49.7101 21.6163 48.9653 20.7767C48.2192 19.9372 46.9368 19.86 46.0986 20.6061L32.4431 32.7218Z"
              fill="#0A0C00"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_427">
              <rect
                width="65"
                height="65"
                fill="white"
                transform="translate(0 0.177979)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      img: blog1,
    },
    {
      id: 3,
      title: "Layout",
      title2: "Design",
      svg: (
        <svg
          className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_522)">
            <path
              d="M20.022 39.7579C14.8988 35.9448 11.5801 29.8426 11.5801 22.9653C11.5801 11.4118 20.9461 2.04578 32.4996 2.04578C44.0532 2.04578 53.4192 11.4118 53.4192 22.9653C53.4192 29.7421 50.1968 35.7663 45.2008 39.5892"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.5003 22.9653L62.3854 63.3102H2.61523L32.5003 22.9653Z"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_522">
              <rect
                width="65"
                height="65"
                fill="white"
                transform="translate(0 0.177979)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      img: blog2,
    },
    {
      id: 4,
      title: "Mobile",
      title2: "Design",
      svg: (
        <svg
          className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_527)">
            <path
              d="M62.4608 15.2432C63.8633 15.2432 64.9999 14.1066 64.9999 12.7042V2.71704C64.9999 1.33494 63.8757 0.177979 62.4608 0.177979H52.4737C51.0718 0.177979 49.9346 1.3146 49.9346 2.71704C49.9346 4.11947 51.0718 5.25609 52.4737 5.25609H56.3309L49.893 11.694C44.8109 4.61042 36.6552 0.177979 27.5066 0.177979C12.304 0.177979 0 12.4805 0 27.6846C0 42.8862 12.3025 55.1912 27.5066 55.1912C34.0011 55.1912 40.1503 52.9542 45.0787 48.8475L60.6656 64.4345C61.657 65.4258 63.2647 65.4258 64.256 64.4345C65.2478 63.4427 65.2478 61.8349 64.256 60.8436L48.6696 45.2567C55.6783 36.846 56.7529 25.4525 52.5317 16.237L59.9218 8.84698V12.7037C59.9218 14.1061 61.0584 15.2432 62.4608 15.2432ZM27.5066 5.25609C35.3222 5.25609 42.2158 9.27544 46.2322 15.3548L32.4999 29.087L24.3085 20.8956C23.3167 19.9043 21.7094 19.9043 20.7176 20.8956L6.38484 35.2284C1.17283 20.6789 12.0119 5.25609 27.5066 5.25609ZM27.5066 50.1126C19.6906 50.1126 12.7974 46.0933 8.78107 40.0139L22.5133 26.2817L30.7047 34.4731C31.6961 35.4649 33.3038 35.4649 34.2951 34.4731L48.6279 20.1403C53.8404 34.6898 43.0013 50.1126 27.5066 50.1126Z"
              fill="#0A0C00"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_527">
              <rect
                width="64.9999"
                height="65"
                fill="white"
                transform="translate(0 0.177979)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      img: design,
    },
    {
      id: 5,
      title: "Web",
      title2: "Design",
      svg: (
        <svg
          className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
          viewBox="0 0 65 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.91718"
            y="11.127"
            width="45.9771"
            height="39.2062"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="2.4375"
            y="3.64673"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="2.4375"
            y="45.626"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="49.8339"
            y="3.64673"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="49.8339"
            y="45.626"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
        </svg>
      ),
      img: blog3,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600,
        offset: 100,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);

  return (
    <div>
      {/* Corbe_Hero_Start */}
      <div className=" -mt-[140px] -z-[99]">
        <div className="relative">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                const formattedIndex = (index + 1).toString().padStart(2, "0");
                return `<span class="${className} inline-block text-white px-3">${formattedIndex}</span>`;
              },
            }}
          >
            <SwiperSlide>
              <SliderContent
                bgImg="/img/HomeOne/featureSlider.png"
                title="Building Brands"
                activeIndex={activeIndex}
                index={0}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                bgImg="/img/HomeOne/featureSlider2.png"
                title="Our Strategy"
                activeIndex={activeIndex}
                index={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                bgImg="/img/HomeOne/featureSlider.png"
                title="Our Strategy"
                activeIndex={activeIndex}
                index={2}
              />
            </SwiperSlide>
          </Swiper>

          <div className="absolute w-full bottom-[150px] xl:-left-10 -left-6">
            <div className="max-w-[1320px] w-full mx-auto flex justify-center">
              <div className="custom-pagination flex gap-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corbe_Feature_Start */}
      <div className="bg-primary py-20 -mt-2">
        <div className="container ">
          <div
            className="flex flex-wrap items-center justify-center  lg:gap-[177px] md:gap-[70px] sm:gap-10 gap-8"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-[7px] relative after:absolute lg:after:-right-[88px]  sm:after:-right-7 after:-right-4  after:top-0 sm:after:w-[1px] after:h-20 after:bg-light">
              <svg
                className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64.6707 0.969192C65.2001 1.79872 65.0816 2.88479 64.3857 3.58063L28.7925 39.1741C28.1413 39.8251 27.1417 39.9753 26.3281 39.5445L1.11605 26.1971C0.383919 25.8095 -0.0514783 25.0272 0.00488191 24.2008C0.0612421 23.3743 0.598795 22.6584 1.37677 22.3738L62.182 0.1279C63.1063 -0.210211 64.1412 0.139674 64.6707 0.969192ZM7.24275 24.6943L26.9217 35.1126L54.7037 7.33056L7.24275 24.6943Z"
                  fill="#0A0C00"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64.03 0.329441C64.8595 0.858884 65.2094 1.89385 64.8713 2.81801L42.6254 63.6232C42.3408 64.4014 41.625 64.9389 40.7984 64.9951C39.9721 65.0515 39.1898 64.6161 38.8022 63.8839L25.4546 38.672C25.0238 37.8582 25.1742 36.8588 25.8252 36.2076L61.4186 0.614342C62.1145 -0.0815047 63.2005 -0.199993 64.03 0.329441ZM57.6687 10.2965L29.8867 38.0785L40.3049 57.7573L57.6687 10.2965Z"
                  fill="#0A0C00"
                />
              </svg>
              <span className="lg:text-xl md:text-lg text-base font-bold md:leading-[26px] leading-[22px] text-secondary">
                Always <br /> updated
              </span>
            </div>
            <div className="flex items-center gap-[7px] relative after:absolute lg:after:-right-[88px] sm:after:-right-7 after:-right-4  after:top-0 sm:after:w-[1px] after:h-20 after:bg-light">
              <svg
                className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
                viewBox="0 0 67 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.4912 9.51594C50.3135 3.37662 42.0894 0 33.3537 0C24.6179 0 16.4066 3.37662 10.2289 9.51594C4.03843 15.6553 0.63623 23.8154 0.63623 32.5C0.63623 41.1846 4.03843 49.3447 10.2289 55.4841C16.4066 61.6106 24.6179 65 33.3537 65C42.0894 65 50.3007 61.6234 56.4784 55.4841C62.6689 49.3447 66.0711 41.1846 66.0711 32.5C66.0711 23.8154 62.6689 15.6553 56.4912 9.51594ZM58.883 22.0632H46.745C46.7323 22.0248 46.7323 21.9864 46.7195 21.9481C45.5428 15.5913 43.8161 10.245 42.4731 6.65093C49.9042 9.23455 55.8901 14.8878 58.883 22.0632ZM29.6573 5.3719C30.8724 5.20563 32.1002 5.12889 33.3537 5.12889C34.3897 5.12889 35.4001 5.19284 36.3977 5.29516C37.4977 7.84042 39.9662 14.1076 41.5266 22.0632H25.6923C27.0225 13.2123 29.2352 6.59976 29.6573 5.3719ZM5.75233 32.5C5.75233 30.6838 5.93139 28.9059 6.27673 27.1793H19.9239C19.4507 32.3081 19.4123 37.2452 19.8088 41.888H7.42785C6.34068 38.9591 5.75233 35.7999 5.75233 32.5ZM9.96031 47.0041H20.4483C21.0878 50.9052 22.0471 54.5887 23.3517 58.0037C17.7879 55.855 13.0939 51.954 9.96031 47.0041ZM20.5251 22.0632H7.83713C10.7789 15.0157 16.5984 9.45199 23.8249 6.80441C22.8657 10.0787 21.4587 15.489 20.5251 22.0632ZM37.0372 59.6281C35.835 59.7816 34.6071 59.8711 33.3665 59.8711C32.0874 59.8711 30.834 59.7816 29.5933 59.6153C27.6492 55.5736 26.3958 51.2889 25.6539 47.0041H41.7824C40.8743 51.2633 39.3651 55.548 37.0372 59.6281ZM42.5754 41.888H24.9633C24.49 36.6568 24.6435 31.6047 25.0656 27.1793H42.358C42.9208 31.6175 43.1382 36.6696 42.5754 41.888ZM43.6242 57.9142C45.1335 54.4992 46.2718 50.854 47.0008 47.0041H56.7598C53.6773 51.89 49.0729 55.7399 43.6242 57.9142ZM47.7427 41.888L47.781 41.4276C48.1903 36.8998 48.1008 32.1163 47.5125 27.1793H60.4434C60.7887 28.9059 60.9678 30.6838 60.9678 32.5C60.9678 35.7999 60.3794 38.9591 59.2923 41.888H47.7427Z"
                  fill="#0A0C00"
                />
              </svg>
              <span className="lg:text-xl md:text-lg text-base font-bold md:leading-[26px] leading-[22px] text-secondary">
                High in <br /> Quality
              </span>
            </div>
            <div className="flex items-center gap-[7px] ">
              <svg
                className=" sm:w-[65px] w-[50px] sm:h-[65px] h-[50px]"
                viewBox="0 0 81 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 9.5V61.5C3.25 63.2239 3.93482 64.8772 5.15381 66.0962C6.37279 67.3152 8.02609 68 9.75 68H74.75C75.6119 68 76.4386 67.6576 77.0481 67.0481C77.6576 66.4386 78 65.612 78 64.75V19.25C78 18.388 77.6576 17.5614 77.0481 16.9519C76.4386 16.3424 75.6119 16 74.75 16H9.75C8.02609 16 6.37279 15.3152 5.15381 14.0962C3.93482 12.8772 3.25 11.2239 3.25 9.5ZM3.25 9.5C3.25 7.77609 3.93482 6.12279 5.15381 4.90381C6.37279 3.68482 8.02609 3 9.75 3H65"
                  stroke="#0A0C00"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="lg:text-xl md:text-lg text-base font-bold md:leading-[26px] leading-[22px] text-secondary">
                Affordable <br /> For everyone
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corbe_About_Start */}
      <section className="relative pt-[120px] bg-accent">
        <div className="container ">
          <h2 className="text-center mb-[60px] " data-aos="fade-up">
            Driven by Creativity <br /> and Passion
          </h2>
          <AboutShuffle />
          <div className="pt-[120px]">
            <h2 className="text-center pb-[60px]" data-aos="fade-up">
              The artistry of brand <br /> storytelling
            </h2>
            <Slider />
          </div>
        </div>
      </section>

      {/* Corbe_Review_Start */}
      <div className="pt-20 pb-[83px]" data-aos="fade-up">
        <div className="container">
          <div className="flex flex-wrap gap-10 sm:justify-between justify-center">
            <Review reviewNumber="$4.5M+" reviewTitle="Monthly Revenue" />
            <Review reviewNumber="$1.5k+" reviewTitle=" Project Delivered" />
            <Review
              reviewNumber="$1000+"
              reviewTitle="  Total User in the World"
            />
          </div>
        </div>
      </div>

      {/* Corbe_Service_Start */}

      <section className="bg-primary py-[120px] relative overflow-hidden">
        <div className="container">
          <div className="absolute -left-32 -top-0 transform -translate-y-1/2">
            <Image src={path} alt="Path" />
          </div>
          <div>
            <h2 className="mb-[60px]" data-aos="fade-up">
              Solutions for <br /> Every Vision
            </h2>

            {visions.map((vision) => {
              return (
                <div key={vision.id}>
                  <div className="mb-[50px]">
                    <div className="flex flex-wrap gap-4  md:flex-row items-center justify-between group transition-all relative   pb-[30px]  duration-500 border-b border-solid border-secondary ">
                      <div className="group  flex items-center  gap-[30px]">
                        <span>{vision.svg}</span>
                        <div>
                          <h5 className="lg:text-[28px] sm:text-2xl text-xl text-secondary sm:leading-[30px] leading-7 font-bold  duration-500">
                            {vision.title} <br /> {vision.title2}
                          </h5>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="sm:w-20 w-[70px] sm:h-20 h-[70px] border border-solid border-secondary rounded-full flex items-center justify-center duration-500 group-hover:-rotate-[45deg] group-hover:bg-secondary group"
                      >
                        <svg
                          className=" sm:w-[48px] w-[40px] sm:h-[49px] h-[40px]"
                          viewBox="0 0 48 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 24.678H38M38 24.678L24 10.678M38 24.678L24 38.678"
                            className="group-hover:stroke-white"
                            stroke="#0A0C00"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>

                      <Image
                        src={vision.img}
                        alt={vision.title}
                        className="absolute opacity-0 invisible  ease-out duration-[.9s] transition-all sm:w-[320px] w-[230px]   right-[15%]  object-cover  group-hover:right-[25%] group-hover:opacity-100 group-hover:visible  group-hover:rotate-[10deg]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Corbe_Tesimonial_Start */}

      <section className=" pt-[120px] bg-accent">
        <div className="container ">
          <h2 className="mb-[62px]" data-aos="fade-up">
            Our customers
          </h2>
          <ReviewSliderContent />
        </div>
      </section>
      {/* Corbe_Blog_Start */}

      <section className="pt-5 pb-[120px] bg-accent">
        <div className="container">
          <h2 className="text-center mb-[60px]" data-aos="fade-up">
            Creativity that tells <br /> your story
          </h2>
          <div
            className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]"
            data-aos="zoom-in-down"
          >
            <BlogContent
              blogImg={blog1}
              blogTitle="looking to create a as a personal portfolio"
            />
            <BlogContent
              blogImg={blog2}
              blogTitle="Elevate Your Brand, Inspire Your Audience"
            />
            <BlogContent
              blogImg={blog3}
              blogTitle="Creating Experiences, Not Just Designs"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeOne;
