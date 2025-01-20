import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[58px] w-full border-2 border-opacity-20 rounded-[15px] pl-4 placeholder:text-secondary outline-none focus:outline-none"
      />
    </div>
  );
};

export default InputField;
