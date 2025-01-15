import React from "react";

const Review = ({ reviewNumber, reviewTitle }) => {
  return (
    <div className=" ">
      <h2 className=" -tracking-[2] sm:mb-5 mb-1">{reviewNumber}</h2>
      <span className="lg:text-xl md:text-lg text-base text-secondary leading-[26px] font-bold">
        {reviewTitle}
      </span>
    </div>
  );
};

export default Review;
