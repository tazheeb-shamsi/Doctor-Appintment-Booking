import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { useState } from "react";
import Appointments from "./Appointments";
import EditProfile from "./EditProfile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const PatientProfile = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("appointments");

  const {
    data: userData,
    isLoading,
    isError,
  } = useGetProfile(`${BASE_URL}/patients/profile/me`);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {isLoading && !isError && <Loader />}
        {isError && !isLoading && <Error errMessage={isError} />}

        {!isLoading && !isError && userData && (
          <div className="grid md:grid-cols-3 gap-7">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData?.photo}
                    alt="avatar"
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-headingColor text-[18px] font-bold">
                  {userData?.name}
                </h3>
                <p className="text-textColor text-[15px] font-medium">
                  {userData?.email}
                </p>
                <p className="text-textColor text-[15px] font-medium">
                  Blood Group:{" "}
                  <span className="ml-2 text-red-500  text-[16px] leading-8 border rounded-full p-1">
                    {userData?.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  className="w-full bg-[#181a1e] p-3 leading-7 text-[16px] rounded-md text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 p-3 mt-4 leading-7 text-[16px] rounded-md text-white">
                  Delete Account
                </button>
              </div>
            </div>
            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  className={`${
                    tab === "appointments" &&
                    "bg-primaryColor text-white font-normal"
                  }p-2 mr-5 px-5  rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor py-1`}
                  onClick={() => setTab("appointments")}
                >
                  Appointments
                </button>
                <button
                  className={`${
                    tab === "edit" && "bg-primaryColor text-white font-normal"
                  } px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor py-1`}
                  onClick={() => setTab("edit")}
                >
                  Edit Profile
                </button>
              </div>

              {tab === "appointments" && <Appointments />}
              {tab === "edit" && <EditProfile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PatientProfile;
