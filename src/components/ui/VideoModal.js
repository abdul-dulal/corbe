import React, { useState } from "react";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
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

export default VideoModal;
