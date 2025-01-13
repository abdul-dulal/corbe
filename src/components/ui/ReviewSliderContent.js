import React from "react";
import VideoModal from "./VideoModal";
import Image from "next/image";

const ReviewSliderContent = ({ img, name, swiperRef }) => {
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
          <VideoModal />
        </div>
      </div>
    </div>
  );
};

export default ReviewSliderContent;
