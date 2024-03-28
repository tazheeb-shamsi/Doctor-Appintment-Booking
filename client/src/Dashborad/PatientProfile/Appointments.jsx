import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import DoctorCard from "../../components/Doctors/DoctorCard";

const Appointments = () => {
  const {
    data: appointments,
    isLoading,
    isError,
  } = useFetchData(`${BASE_URL}/patients/appointments/my-appointments`);

  return (
    <div>
      {isLoading && !isError && <Loader />}
      {isError && !isLoading && <Error errMessage={isError} />}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {!appointments.length > 0
            ? "There is no appointment(s) yet"
            : appointments.map((appointment) => (
                <DoctorCard {...appointment} key={appointment.id} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
