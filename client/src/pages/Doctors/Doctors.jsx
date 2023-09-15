import { doctors } from "../../data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full cursor-pointer focus:outline-none placehoder:text-[#4e545f] "
              placeholder="Search Doctor.."
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[5px] lg:mt-[10px]">
            {doctors.map((doctor) => (
              <DoctorCard {...doctor} key={doctor.id} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
