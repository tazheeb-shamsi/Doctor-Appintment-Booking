import ServiceCard from "../components/Services/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[5px] lg:mt-[10px]">
          {services.map((item) => (
            <ServiceCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
