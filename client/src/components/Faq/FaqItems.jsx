import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItems = ({ faq, isOpen, toggleAction }) => {
  return (
    <div className="p-3 lg:p-4 mb-2 lg:mb-3 rounded-[12px] border border-solid border-[#d9dce2]mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAction}
      >
        <h4 className="text-[16px] lg:text-[22px] leading-7 lg:leading-8 text-headingColor">
          {faq.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f21] rounded`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-[400] text-textColor ">
            {faq.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItems;
