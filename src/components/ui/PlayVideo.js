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
        className="absolute sm:top-[35%] top-[25%] sm:left-[42%] left-[35%] flex items-center justify-center sm:w-[182px] w-[120px] sm:h-[182px] h-[120px] rounded-full  bg-white text-center "
      >
        <span className=" sm:text-[17px] text-[14px] leading-4 font-bold text-secondary">
          Play Video
        </span>
      </button>
      {isOpen && (
        <div
          onClick={togglePopup}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-75"
        >
          <button
            onClick={togglePopup}
            className="h-8 w-8 flex items-center justify-center p-[2px] rounded-full border border-solid border-gray-300 absolute top-2 right-2 text-2xl text-white"
          >
            x
          </button>
          <div
            onClick={closePopup}
            className="relative w-[90%] h-[90%] bg-white rounded"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayVideo;
