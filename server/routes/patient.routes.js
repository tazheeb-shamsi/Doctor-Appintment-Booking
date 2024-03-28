import express from "express";
import {
  getAllPatient,
  getSinglePatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";
import { authenticate, restrict } from "../middleware/verifyToken.js";

const router = express.Router();

// ====== patient endpoints ========
router.get(
  "/",
  authenticate,
  restrict({ user: ["admin"] }),
  getAllPatient
);
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

export default router;
