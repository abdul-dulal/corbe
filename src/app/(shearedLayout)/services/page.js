import BreadCumb from "@/src/components/ui/BreadCumb";
import Service from "@/src/components/ui/Service";
import React from "react";

const Services = () => {
  return (
    <div>
      <BreadCumb currentPage="services" />
      <div className="sm:pt-[120px] pt-[70px] pb-[300px] bg-accent">
        <div className="container">
          <Service item={6} />
        </div>
      </div>
    </div>
  );
};

export default Services;
