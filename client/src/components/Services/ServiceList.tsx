import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] xl:gap-[70px] mt-[30px] lg:mt-[55px]">
      {services.map((item) => (
        <ServiceCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ServiceList;
