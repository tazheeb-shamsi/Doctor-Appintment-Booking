const SidePannel = () => {
  const handleAppointmentBooking = async (e) => {
    e.preventDefault();
    // TODO: api integratiion, for appointment booking
  };
  return (
    <div className="shadow-pannelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between ">
        <p className="text__para mt-0 font-semibold"> Clinic Appointment</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          ₹700
        </span>
      </div>

      <div className="mt-50px">
        <p className="text__para text-center underline mt-1 font-semibold text-headingColor">
          Available Slots
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 6:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 6:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 6:30 PM
            </p>
          </li>
        </ul>

        <button
          className="btn px-2 w-full rounded-md"
          onClick={handleAppointmentBooking}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default SidePannel;
