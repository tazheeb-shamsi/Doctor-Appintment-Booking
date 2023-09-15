import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import Patient from "../models/PatientSchema.js";
import dotenv from "dotenv";
dotenv.config();

export const authenticate = async (req, res, next) => {
  // get token from headers
  const authToken = req.headers.authorization;

  // check token is exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({
      success: false,
      message: "No token, authorization denied",
    });
  }
  try {
    const token = authToken.split(" ")[1];

    //verifying token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    console.log("Token verification error:", err);
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  let user;

  const patient = await Patient.findById(userId);
  const doctor = await Doctor.findById(userId);
  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = doctor;
  }
  if (!roles.user.includes(user.role)) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized to perform this action",
    });
  }
  next();
};
