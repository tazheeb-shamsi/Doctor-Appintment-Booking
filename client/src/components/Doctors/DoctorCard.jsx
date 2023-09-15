import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import starIcon from "/images/Star.png";

const DoctorCard = (doctor) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5" key={doctor.id}>
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="text-[18px] lg:text-[26px] leading-[30px] lg:leading-9 font-[600] text-headingColor ">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#ccf3f0] text-irisBlueColor py-1 lg:py-2 px-2 lg:px-6 text-[18px] lg:text-[16px] leading-4 lg:leading-7 font-semibold rounded">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px]">
            <img
              className="flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-semibold text-headingColor"
              src={starIcon}
              alt="star icon"
            />
            {avgRating}
          </span>
          <span className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-[400] text-textColor">
            (Ratings: {totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] lg:text-[18px] leading-7 lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients}
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
        </div>

        <Link
          to="/doctors/1"
          className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
