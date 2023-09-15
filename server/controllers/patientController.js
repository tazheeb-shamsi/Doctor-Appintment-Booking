import Patient from "../models/PatientSchema.js";

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
      message: "User Data not found",
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
      message: "Successfully Deleted Patient",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Patient Data",
    });
  }
};