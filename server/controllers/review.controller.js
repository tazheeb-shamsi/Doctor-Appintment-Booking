import Doctor from "../models/doctor.model.js";
import Review from "../models/review.model.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      success: true,
      message: " Reviews Fetched Successfully 🎉 ",
      data: { reviews },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Reviews Data not found 😒",
    });
  }
};

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.patient) req.body.patient = req.userId;

  console.log("doctorId", (req.body.doctor = req.params.doctorId));
  console.log("patientId", (req.body.patient = req.userId));

  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "Review Created Successfully 🎉 ",
      data: { savedReview },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Review 😒",
    });
  }
};
