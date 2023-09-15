import {doctors} from '../../data/doctors'
import DoctorCard from './DoctorCard';

const DoctorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] xl:gap-[70px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor) => (
        <DoctorCard {...doctor} key={doctor.id} />
      ))}
    </div>
  );
};

export default DoctorsList;
