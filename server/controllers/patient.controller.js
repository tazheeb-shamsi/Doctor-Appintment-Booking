import Patient from "../models/patient.model.js";
import Booking from "../models/booking.model.js";
import Doctor from "../models/doctor.model.js";

export const getAllPatient = async (req, res) => {
  try {
    const patients = await Patient.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: " Patients Fetched Successfully ",
      data: { patients },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "User Data not found",
    });
  }
};

export const getSinglePatient = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Patient.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: " Patient Found Successfully ",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Patient Data not found",
    });
  }
};

export const updatePatient = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedPatient = await Patient.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Patient Data Updated Successfully  ",
      data: updatedPatient,
    });
  } catch (error) {
    console.log("ERROR ---> ", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update Patient Data",
    });
  }
};

export const deletePatient = async (req, res) => {
  const id = req.params.id;
  try {
    await Patient.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted Patient Data",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Patient Data",
    });
  }
};

export const getPatientProfile = async (req, res) => {
  const patientId = req.userId;
  try {
    const patient = await Patient.findById(patientId).select("-password");

    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }
    // const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Found patient info.. ",
      data: patient ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getPatientAppointments = async (req, res) => {
  const userId = req.userId;
  try {
    // Step1: retrive appointments from booking
    const bookings = await Booking.find({ patient: userId });
    // Step2: extract doctor's Ids from appointment booking
    const doctorIds = bookings.map((booking) => booking.doctor.id);
    // Step3: retrive doctors using booking doctor's Ids
    const doctors = await Doctor.find({
      _id: { $in: doctorIds },
    }).select("-password");

    // Step4: retrive appointments from doctor
    // const appointments = doctors.map((doctor) => doctor.appointments);
    res.status(200).json({
      success: true,
      message: "Found appointments.. ",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
    });
  }
};
