import React from "react";
import ButtonMore from "./ButtonMore";
import Link from "next/link";

const Service = () => {
  const services = [
    {
      title: "Graphic Design",
      svg: (
        <svg
          width="80"
          height="76"
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
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
      {services.map((service) => {
        return (
          <div className="group p-10 bg-white" key={service.title}>
            <span className="">{service.svg}</span>
            <h4 className="pt-[60px] pb-5">
              <Link href="#">{service.title}</Link>
            </h4>
            <p className="text-light leading-[26px]">
              Elevate Your Brand with Inspired people to gain knowledge about to
              is invest and save their money{" "}
            </p>
            <button className="group relative z-[9] mt-6 py-[22px] px-[30px] bg-transparent  text-secondary capitalize group-hover:text-white duration-500 border border-solid border-secondary after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-secondary group-hover:after:-z-[1]  after:hover:right-[50%] group-hover:after:left-0 group-hover:after:w-[100%] ">
              <Link
                href="/"
                className="inline-block text-[17px] font-medium leading-[15px] capitalize"
              >
                learn more
                <span className="inline-block pl-[10px] ">
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
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
