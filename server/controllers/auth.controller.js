import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { name, email, password, gender, role, photo } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await Patient.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new Patient({
        name,
        email,
        password: hashedPassword,
        gender,
        role,
        photo,
      });
    }
    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        gender,
        role,
        photo,
      });
    }
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error, please try again",
    });
  }
};

export const Login = async (req, res) => {
  const { email } = req.body;

  try {
    let user = null;
    const patient = await Patient.findOne({ email: email });
    const doctor = await Doctor.findOne({ email: email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: 86400,
    });
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      status: true,
      message: "Successfully LoggedIn 🎉",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    console.log("ERROR ==>", error.message);
    res.status(200).json({
      status: false,
      message: " Failed to LogIn 😒 ",
    });
  }
};
