"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import c1 from "@/public/img/HomeOne/c1.png";
import c2 from "@/public/img/HomeOne/c2.png";
import Image from "next/image";
export default function ReviewSliderContent() {
  const testimonials = [
    {
      quote:
        "Milestone helps me keep a clean, organized ledger that I can access anywhere. The UI is so intuitive that anyone can use it, without any knowledge on the system. I also love the financial reports!",
      author: "Wade Warren",
      position: "Founder & CEO",
      image: c1,
    },
    {
      quote:
        "Milestone helps me keep a clean, organized ledger that I can access anywhere. The UI is so intuitive that anyone can use it, without any knowledge on the system. I also love the financial reports!",
      author: "Abdul Dulal",
      position: "Business Owner",
      image: c2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <div className="grid grid-cols-12 lg:gap-[30px]">
        <div className="lg:col-span-8 col-span-12 py-10 sm:px-10 px-6 bg-white">
          <div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="pt-4 xl:mb-10 lg:mb-2 mb-6 lg:w-[600px] w-full text-[#0A0C00] sm:text-[22px] text-xl xl:leading-9 leading-[26px] font-normal">
              {testimonials[currentSlide].quote}
            </p>
            <h5 className="sm:text-xl text-lg text-secondary leading-[26px] font-bold">
              {testimonials[currentSlide].author}
            </h5>
            <p className="text-light mt-1">
              {testimonials[currentSlide].position}
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-4 col-span-12 ">
          <Image
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].author}
            className="w-full h-auto"
          />
          <button
            onClick={togglePopup}
            className="absolute top-[38%] left-[40%] flex items-center justify-center w-[100px] h-[100px] bg-primary rounded-full corbe_review"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {isOpen && (
            <div
              onClick={togglePopup}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 duration-[.8s]"
            >
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 p-[2px] rounded-full border border-solid border-gray-300 text-2xl text-white"
              >
                x
              </button>
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-[90%] h-[90%]  rounded slide_up"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center py-[62px]">
        <button
          onClick={prevSlide}
          className={`flex items-center justify-center cursor-pointer text-2xl  border border-solid border-secondary w-20 h-20 rounded-full leading-[66px] my-[10px] duration-500  ${
            currentSlide === testimonials.length - 1
              ? "bg-black text-white"
              : "border border-black text-black"
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
              d="M1.08374 9.96932L7.75041 16.636C8.00041 16.886 8.33374 17.011 8.66707 17.011C9.04207 17.011 9.37541 16.886 9.62541 16.636C10.1671 16.136 10.1671 15.261 9.62541 14.761L5.25041 10.3443H18.0004C18.7504 10.3443 19.3337 9.76099 19.3337 9.01099C19.3337 8.30265 18.7504 7.67765 18.0004 7.67765H5.25041L9.62541 3.30265C10.1671 2.80265 10.1671 1.92765 9.62541 1.42765C9.12541 0.885986 8.25041 0.885986 7.75041 1.42765L1.08374 8.09432C0.542073 8.59432 0.542073 9.46932 1.08374 9.96932Z"
              fill={`${
                currentSlide === testimonials.length - 1 ? "white" : "black"
              }`}
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className={`flex items-center justify-center cursor-pointer text-2xl  border border-solid border-secondary w-20 h-20 rounded-full leading-[66px] my-[10px] duration-500  ${
            currentSlide === 0
              ? "bg-black text-white"
              : "border border-black text-black"
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
              fill={`${currentSlide === 0 ? "white" : "black"}`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
