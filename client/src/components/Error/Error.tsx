import React from "react";

const Error = ({ errMessage }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h2 className="text-headingColor text-[20px] leading-[30px] font-semiBold">
        {errMessage}
      </h2>
    </div>
  );
};

export default Error;
