import express from "express";
import {
  getAllPatient,
  getSinglePatient,
  updatePatient,
  deletePatient,
  getPatientProfile,
  getPatientAppointments,
} from "../controllers/patient.controller.js";
import { authenticate, restrict } from "../middleware/verifyToken.js";

const router = express.Router();

// ====== patient endpoints ========
router.get("/", authenticate, restrict({ user: ["admin"] }), getAllPatient);

router.get(
  "/:id",
  authenticate,
  restrict({ user: ["patient"] }),
  getSinglePatient
);

router.put(
  "/:id",
  authenticate,
  restrict({ user: ["patient"] }),
  updatePatient
);

router.delete(
  "/:id",
  authenticate,
  restrict({ user: ["patient", "admin"] }),
  deletePatient
);

router.get(
  "/profile/me",
  authenticate,
  restrict({ user: ["patient", "admin"] }),
  getPatientProfile
);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict({ user: ["patient", "admin"] }),
  getPatientAppointments
);

export default router;
