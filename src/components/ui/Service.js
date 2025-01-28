import React from "react";

import Link from "next/link";

const Service = ({ item }) => {
  const services = [
    {
      title: "Graphic Design",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 80 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11.7296"
            y="12.2303"
            width="57.5396"
            height="49.2062"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="3"
            y="3.5"
            width="15"
            height="13.3333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="3"
            y="55.1667"
            width="15"
            height="13.3333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="61.334"
            y="3.5"
            width="15"
            height="13.3333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="61.334"
            y="55.1667"
            width="15"
            height="13.3333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
        </svg>
      ),
    },
    {
      title: "SEO Expert",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_490)">
            <path
              d="M62.4608 15.0652C63.8633 15.0652 64.9999 13.9286 64.9999 12.5262V2.53906C64.9999 1.15696 63.8757 0 62.4608 0H52.4737C51.0718 0 49.9346 1.13663 49.9346 2.53906C49.9346 3.94149 51.0718 5.07812 52.4737 5.07812H56.3309L49.893 11.516C44.8109 4.43244 36.6552 0 27.5066 0C12.304 0 0 12.3025 0 27.5066C0 42.7082 12.3025 55.0132 27.5066 55.0132C34.0011 55.0132 40.1503 52.7762 45.0787 48.6696L60.6656 64.2565C61.657 65.2478 63.2647 65.2478 64.256 64.2565C65.2478 63.2647 65.2478 61.657 64.256 60.6656L48.6696 45.0787C55.6783 36.6681 56.7529 25.2745 52.5317 16.059L59.9218 8.669V12.5257C59.9218 13.9281 61.0584 15.0652 62.4608 15.0652ZM27.5066 5.07812C35.3222 5.07812 42.2158 9.09746 46.2322 15.1768L32.4999 28.9091L24.3085 20.7176C23.3167 19.7263 21.7094 19.7263 20.7176 20.7176L6.38484 35.0504C1.17283 20.5009 12.0119 5.07812 27.5066 5.07812ZM27.5066 49.9346C19.6906 49.9346 12.7974 45.9153 8.78107 39.8359L22.5133 26.1037L30.7047 34.2951C31.6961 35.287 33.3038 35.287 34.2951 34.2951L48.6279 19.9623C53.8404 34.5118 43.0013 49.9346 27.5066 49.9346Z"
              fill="#0A0C00"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_490">
              <rect width="64.9999" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Layout Design",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_519)">
            <path
              d="M20.0225 39.5799C14.8993 35.7669 11.5806 29.6646 11.5806 22.7873C11.5806 11.2338 20.9465 1.8678 32.5001 1.8678C44.0537 1.8678 53.4197 11.2338 53.4197 22.7873C53.4197 29.5641 50.1973 35.5883 45.2013 39.4112"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.4998 22.7874L62.3849 63.1322H2.61475L32.4998 22.7874Z"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_519">
              <rect width="65" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Mobile Design",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.625 16.625H64.125V26.125H54.625V16.625ZM54.625 30.875H64.125V40.375H54.625V30.875ZM40.375 16.625H49.875V26.125H40.375V16.625ZM40.375 30.875H49.875V40.375H40.375V30.875Z"
            fill="white"
            stroke="#0A0C00"
            stroke-width="3"
          />
          <path
            d="M34.4375 61.75C36.405 61.75 38 60.155 38 58.1875C38 56.22 36.405 54.625 34.4375 54.625C32.47 54.625 30.875 56.22 30.875 58.1875C30.875 60.155 32.47 61.75 34.4375 61.75Z"
            fill="#0A0C00"
          />
          <path
            d="M49.875 71.25H19C17.7406 71.2487 16.5332 70.7479 15.6426 69.8574C14.7521 68.9668 14.2513 67.7594 14.25 66.5V9.5C14.2513 8.24061 14.7521 7.03316 15.6426 6.14263C16.5332 5.25211 17.7406 4.75126 19 4.75H49.875V9.5H19V66.5H49.875V47.5H54.625V66.5C54.6237 67.7594 54.1229 68.9668 53.2324 69.8574C52.3418 70.7479 51.1344 71.2487 49.875 71.25Z"
            fill="#0A0C00"
          />
        </svg>
      ),
    },
    {
      title: "Web Design",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.6707 0.969192C65.2001 1.79872 65.0816 2.88479 64.3857 3.58063L28.7925 39.1741C28.1413 39.8251 27.1417 39.9753 26.3281 39.5445L1.11605 26.1971C0.383919 25.8095 -0.0514783 25.0272 0.00488191 24.2008C0.0612421 23.3743 0.598795 22.6584 1.37677 22.3738L62.182 0.1279C63.1063 -0.210211 64.1412 0.139674 64.6707 0.969192ZM7.24275 24.6943L26.9217 35.1126L54.7037 7.33056L7.24275 24.6943Z"
            fill="#0A0C00"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.0302 0.329441C64.8597 0.858884 65.2095 1.89385 64.8714 2.81801L42.6256 63.6232C42.341 64.4014 41.6251 64.9389 40.7986 64.9951C39.9722 65.0515 39.1899 64.6161 38.8023 63.8839L25.4547 38.672C25.0239 37.8582 25.1743 36.8588 25.8253 36.2076L61.4187 0.614342C62.1146 -0.0815047 63.2006 -0.199993 64.0302 0.329441ZM57.6689 10.2965L29.8868 38.0785L40.305 57.7573L57.6689 10.2965Z"
            fill="#0A0C00"
          />
        </svg>
      ),
    },
    {
      title: "Mobile UI",
      svg: (
        <svg
          width="65"
          height="65"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.4294 2H60.0008V10.5714H51.4294V2ZM51.4294 14.8571H60.0008V23.4286H51.4294V14.8571ZM38.5723 2H47.1437V10.5714H38.5723V2ZM38.5723 14.8571H47.1437V23.4286H38.5723V14.8571Z"
            fill="white"
            stroke="#0A0C00"
            stroke-width="3"
          />
          <path
            d="M55.7143 32.0002V44.8573H4.28571V10.5716H30V6.28589H4.28571C3.14907 6.28589 2.05898 6.73742 1.25526 7.54115C0.451529 8.34487 0 9.43496 0 10.5716V44.8573C0 45.994 0.451529 47.084 1.25526 47.8878C2.05898 48.6915 3.14907 49.143 4.28571 49.143H21.4286V57.7145H12.8571V62.0002H47.1429V57.7145H38.5714V49.143H55.7143C56.8509 49.143 57.941 48.6915 58.7447 47.8878C59.5485 47.084 60 45.994 60 44.8573V32.0002H55.7143ZM34.2857 57.7145H25.7143V49.143H34.2857V57.7145Z"
            fill="#0A0C00"
          />
        </svg>
      ),
    },
  ];
  const slicedServices = services.slice(0, item);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px] ">
      {slicedServices.map((service) => {
        return (
          <div className="group sm:p-10 p-8 bg-white " key={service.title}>
            <span className="">{service.svg}</span>
            <h4 className="sm:pt-[60px] pt-10 pb-5">
              <Link href="/service-details">{service.title}</Link>
            </h4>
            <p className="text-light leading-[26px]">
              Elevate Your Brand with Inspired people to gain knowledge about to
              is invest and save their money
            </p>
            <Link
              href="/service-details"
              className=" inline-block text-[17px] font-medium leading-[15px]   group  relative z-[9] mt-6 py-[22px] px-[30px] bg-transparent text-secondary capitalize group-hover:text-white duration-500 border border-solid border-secondary overflow-hidden"
            >
              <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 transform transition-transform duration-500 origin-center z-[-1]"></span>
              learn more
              <span className="inline-block pl-[10px]">
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-white"
                >
                  <path
                    d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                    fill="#0A0C00"
                    className="fill-current"
                  />
                </svg>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
