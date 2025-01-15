import React from "react";

const ServiceButton = ({ buttonTitle }) => {
  return (
    <div>
      <button className="relative px-[30px] py-4 z-[9] bg-transparent border border-solid border-light rounded-[99px] text-[17px] leading-[15px] font-medium text-light capitalize hover:text-white duration-500 after:absolute after:content-[''] after:right-0 after:top-0 after:h-full  after:w-0 after:bg-transparent after:-z-[1] after:ease-out after:duration-500 after:hover:w-full after:hover:left-0 after:hover:bg-secondary after:hover:rounded-[99px]  ">
        {buttonTitle}
      </button>
    </div>
  );
};

export default ServiceButton;
