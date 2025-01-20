import React from "react";

const ProvideService = () => {
  const services = [
    {
      id: 1,
      title: "Graphic Design",
      svg: (
        <svg
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.0387 50.5933C21.8958 46.0213 17.9165 38.7045 17.9165 30.4583C17.9165 16.6052 29.1467 5.375 42.9998 5.375C56.853 5.375 68.0832 16.6052 68.0832 30.4583C68.0832 38.5839 64.2195 45.8072 58.229 50.391"
            stroke="#6F716C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.9998 30.4585L78.8332 78.8335H7.1665L42.9998 30.4585Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      id: 2,
      title: "Layout Design",
      svg: (
        <svg
          width="76"
          height="68"
          viewBox="0 0 76 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10.4609"
            y="10.9614"
            width="55.7692"
            height="47.6923"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="2"
            y="2.5"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="2"
            y="52.5771"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="58.5391"
            y="2.5"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="58.5391"
            y="52.5771"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Mobile Design",
      svg: (
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.9375 17.9375H69.1875V28.1875H58.9375V17.9375ZM58.9375 33.3125H69.1875V43.5625H58.9375V33.3125ZM43.5625 17.9375H53.8125V28.1875H43.5625V17.9375ZM43.5625 33.3125H53.8125V43.5625H43.5625V33.3125Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="3"
          />
          <path
            d="M37.1562 66.625C39.2791 66.625 41 64.9041 41 62.7812C41 60.6584 39.2791 58.9375 37.1562 58.9375C35.0334 58.9375 33.3125 60.6584 33.3125 62.7812C33.3125 64.9041 35.0334 66.625 37.1562 66.625Z"
            fill="#6F716C"
          />
          <path
            d="M53.8125 76.875H20.5C19.1412 76.8736 17.8384 76.3333 16.8776 75.3724C15.9167 74.4116 15.3764 73.1088 15.375 71.75V10.25C15.3764 8.89118 15.9167 7.58841 16.8776 6.62758C17.8384 5.66675 19.1412 5.12636 20.5 5.125H53.8125V10.25H20.5V71.75H53.8125V51.25H58.9375V71.75C58.9361 73.1088 58.3958 74.4116 57.4349 75.3724C56.4741 76.3333 55.1713 76.8736 53.8125 76.875Z"
            fill="#6F716C"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Web Design",
      svg: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 2H70V12H60V2ZM60 17H70V27H60V17ZM45 2H55V12H45V2ZM45 17H55V27H45V17Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="3"
          />
          <path
            d="M65 37V52H5V12H35V7H5C3.67392 7 2.40215 7.52678 1.46447 8.46447C0.526784 9.40215 0 10.6739 0 12V52C0 53.3261 0.526784 54.5979 1.46447 55.5355C2.40215 56.4732 3.67392 57 5 57H25V67H15V72H55V67H45V57H65C66.3261 57 67.5979 56.4732 68.5355 55.5355C69.4732 54.5979 70 53.3261 70 52V37H65ZM40 67H30V57H40V67Z"
            fill="#6F716C"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 justify-between">
      {services.map((service) => {
        return (
          <div key={service.id} className="flex gap-5">
            <span>{service.svg}</span>
            <h4 className="text-light">
              {service.title.split(" ").map((word) => (
                <div key={word}>{word}</div>
              ))}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default ProvideService;
