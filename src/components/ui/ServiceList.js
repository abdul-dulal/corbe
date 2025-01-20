import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceList = ({ title }) => {
  return (
    <li className=" flex items-center gap-5 lg:text-xl leading-[30px] text-light font-bold mb-6">
      <span className=" h-5 w-5 rounded-full bg-light flex items-center justify-center">
        <FontAwesomeIcon icon={faCheck} className="text-white text-[12px]" />
      </span>
      {title}
    </li>
  );
};

export default ServiceList;
