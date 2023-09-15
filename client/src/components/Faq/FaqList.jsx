import FaqItem from "./FaqItems";

import { faqs } from "../../data/faqs.js";
import { useState } from "react";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className=" mt-[38px] lg:mt-[55px]">
      {faqs.map((faq, index) => (
        <FaqItem
          faq={faq}
          key={index}
          isOpen={index === openIndex}
          toggleAction={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FaqList;
