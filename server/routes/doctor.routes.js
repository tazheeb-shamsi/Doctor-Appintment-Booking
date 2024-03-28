import express from "express";
import {
  deleteDoctor,
  getAllDoctors,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctor.controller.js";
import { authenticate, restrict } from "../middleware/verifyToken.js";

import reviewRouter from "./review.routes.js";

const router = express.Router();

// ====== nested doctor routes endpoints ========
router.use("/:doctorId/reviews", reviewRouter);

// ====== doctor endpoints ========
router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict({ user: ["doctor"] }), updateDoctor);
router.delete(
  "/:id",
  authenticate,
  restrict({ user: ["doctor", "admin"] }),
  deleteDoctor
);
router.get(
  "/profile/me",
  authenticate,
  restrict({ user: ["doctor", "admin"] }),
  getDoctorProfile
);

export default router;
