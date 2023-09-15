import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;

const corsOptions = {
  origin: true,
};

// database connection
mongoose.set("strictQuery", false);
const dbConnection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established 🎉");
  } catch (error) {
    console.log("Error while establishing Database connection 😒");
  }
};

// ==== middlewares ====
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// ==== Routes =====
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.listen(port, () => {
  dbConnection();
  console.log(`Server is listening on port: ${port}`);
});
