import React, { useState } from "react";

import Image from "next/image";

const ReviewSliderContent = ({ img, name, swiperRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-8 col-span-12 py-10 sm:px-10 px-6 bg-white">
          <div className="flex gap-2 items-center">
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16_577)">
                  <g clipPath="url(#clip1_16_577)">
                    <g clipPath="url(#clip2_16_577)">
                      <path
                        d="M9.99912 17.5246L4.12161 20.8146L5.43411 14.2079L0.488281 9.63461L7.17744 8.84128L9.99912 2.72461L12.8208 8.84128L19.5099 9.63461L14.5641 14.2079L15.8766 20.8146L9.99912 17.5246Z"
                        fill="#0A0C00"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip1_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip2_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16_577)">
                  <g clipPath="url(#clip1_16_577)">
                    <g clipPath="url(#clip2_16_577)">
                      <path
                        d="M9.99912 17.5246L4.12161 20.8146L5.43411 14.2079L0.488281 9.63461L7.17744 8.84128L9.99912 2.72461L12.8208 8.84128L19.5099 9.63461L14.5641 14.2079L15.8766 20.8146L9.99912 17.5246Z"
                        fill="#0A0C00"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip1_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip2_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16_577)">
                  <g clipPath="url(#clip1_16_577)">
                    <g clipPath="url(#clip2_16_577)">
                      <path
                        d="M9.99912 17.5246L4.12161 20.8146L5.43411 14.2079L0.488281 9.63461L7.17744 8.84128L9.99912 2.72461L12.8208 8.84128L19.5099 9.63461L14.5641 14.2079L15.8766 20.8146L9.99912 17.5246Z"
                        fill="#0A0C00"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip1_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip2_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16_577)">
                  <g clipPath="url(#clip1_16_577)">
                    <g clipPath="url(#clip2_16_577)">
                      <path
                        d="M9.99912 17.5246L4.12161 20.8146L5.43411 14.2079L0.488281 9.63461L7.17744 8.84128L9.99912 2.72461L12.8208 8.84128L19.5099 9.63461L14.5641 14.2079L15.8766 20.8146L9.99912 17.5246Z"
                        fill="#0A0C00"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip1_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                  <clipPath id="clip2_16_577">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 2.30762)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div>
            <p className="pt-4 mb-10 lg:w-[600px] w-full text-[#0A0C00] sm:text-[22px] text-xl leading-9 font-normal">
              “Milestone helps me keep a clean, organized ledger that I can
              access anywhere. The UI is so intuitive that anyone can use it,
              without any knowledge on the system. I also love the financial
              reports!
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
      </div>
    </div>
  );
};

export default ReviewSliderContent;
