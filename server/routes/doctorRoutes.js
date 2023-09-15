import express from "express";
import {
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";
import { authenticate, restrict } from "../middleware/verifyToken.js";

import reviewRouter from "./reviewRoutes.js";

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

export default router;
