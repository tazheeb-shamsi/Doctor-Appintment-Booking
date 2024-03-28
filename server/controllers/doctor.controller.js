import Booking from "../models/booking.model.js";
import Doctor from "../models/doctor.model.js";

export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }
    res.status(200).json({
      success: true,
      message: " Doctors Fetched Successfully ",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while fetching doctors list",
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    res.status(200).json({
      success: true,
      message: " Doctor Found Successfully ",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "User Data not found",
    });
  }
};

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated Patient",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update Patient Data",
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "  Doctor Removed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Doctor Data",
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(userId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    const { password, ...rest } = user._doc;
    const appointments = Booking.find({ doctor: doctorId });
    res.status(200).json({
      success: true,
      message: "Found doctors info.. ",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Oops! Unable to find doctors info..",
    });
  }
};
