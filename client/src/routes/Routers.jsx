import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import PatientProfile from "../Dashborad/PatientProfile/PatientProfile";
import DoctorProfile from "../Dashborad/DoctorProfile/DoctorProfile";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/patients/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <PatientProfile />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <DoctorProfile />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default Routers;
