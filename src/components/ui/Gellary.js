import Image from "next/image";
import React from "react";
import GellaryButton from "./GellaryButton";

const Gellary = ({ gellary, gellaryTitle }) => {
  return (
    <div>
      <div>
        <Image src={gellary} className="w-full mb-[30px]" alt="Image Gellary" />
        <div className="flex flex-wrap gap-[7px] mb-5">
          <GellaryButton gTitle="Website" />
          <GellaryButton gTitle="Branding" />
          <GellaryButton gTitle="Application" />
        </div>
        <h4>{gellaryTitle}</h4>
      </div>
    </div>
  );
};

export default Gellary;
