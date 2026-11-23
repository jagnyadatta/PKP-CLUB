import express from "express";
import upload from "../middlewares/multer.js";
import {
  getAllPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
} from "../controllers/program.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes for visitors
router.get("/", getAllPrograms);
router.get("/all", getAllPrograms);
router.get("/:id", getProgramById);

// Admin-protected routes (Requirement 3: Every admin API must independently verify admin privileges)
router.post("/", verifyAdmin, upload.single("image"), createProgram);
router.post("/new", verifyAdmin, upload.single("image"), createProgram);
router.put("/:id", verifyAdmin, upload.single("image"), updateProgram);
router.put("/update/:id", verifyAdmin, upload.single("image"), updateProgram);
router.delete("/:id", verifyAdmin, deleteProgram);
router.delete("/delete/:id", verifyAdmin, deleteProgram);

export default router;
