"use client";
import React, { useState } from "react";

const PlayVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="">
      <button
        onClick={togglePopup}
        className="absolute sm:top-[35%] top-[25%] sm:left-[42%] left-[35%] flex items-center justify-center sm:w-[140px] w-[110px] sm:h-[140px] h-[110px] rounded-full  bg-white text-center corbe_play"
      >
        <span className=" sm:text-[17px] text-[12px] leading-4 font-semibold text-secondary ">
          Play Video
        </span>
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
  );
};

export default PlayVideo;
