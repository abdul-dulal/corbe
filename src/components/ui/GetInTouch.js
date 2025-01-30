import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GetInTouch = ({ icon, title, address }) => {
  return (
    <div className=" sm:flex block  items-center gap-5 ">
      <div>
        <div className=" w-[60px] h-[60px] bg-transparent border border-solid border-secondary rounded-[15px] text-center   text-[26px] leading-[60px] mt-6">
          <span className="text-[#083C2F]  ">
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
      </div>

      <div>
        <h5 className="lg:text-xl md:text-lg text-base leading-[26px] font-bold  mt-3 mb-[6px]">
          {title}
        </h5>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default GetInTouch;
