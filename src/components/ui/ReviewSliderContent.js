import React, { useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewSliderContent = ({ img, name, swiperRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="grid grid-cols-12 gap-[30px]">
      <div className="lg:col-span-8 col-span-12 py-10 sm:px-10 px-6 bg-white">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>
          <p className="pt-4 mb-10 lg:w-[600px] w-full text-[#0A0C00] sm:text-[22px] text-xl leading-9 font-normal">
            “Milestone helps me keep a clean, organized ledger that I can access
            anywhere. The UI is so intuitive that anyone can use it, without any
            knowledge on the system. I also love the financial reports!
          </p>
          <h5 className="text-xl text-secondary leading-[26px] font-bold">
            {name}
          </h5>
          <p className="text-light mt-1">Founder & CEO</p>
        </div>
      </div>
      <div className="relative lg:col-span-4 col-span-12 ">
        <Image src={img} className="w-full h-auto" alt="Client Review" />
        <button
          onClick={togglePopup}
          className="absolute top-[38%] left-[40%] flex items-center justify-center w-[100px] h-[100px] bg-primary rounded-full Corbe_review"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          >
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 p-[2px] rounded-full border border-solid border-gray-300 text-2xl text-white"
            >
              x
            </button>
            <div
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
              className="relative w-[90%] h-[90%] bg-white rounded"
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
  );
};

export default ReviewSliderContent;
