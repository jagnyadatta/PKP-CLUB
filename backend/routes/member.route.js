import express from "express";
import upload from "../middlewares/multer.js";
import { addMember, deleteMember, getAllMembers, getMemberById, updateMember } from "../controllers/member.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes for visitors
router.route("/all").get(getAllMembers);
router.route("/:id").get(getMemberById);

// Admin-protected routes (Requirement 3: Every admin API must independently verify admin privileges)
router.route("/new").post(verifyAdmin, upload.single("image"), addMember);

// Support both REST standard (:id) and custom path aliases (/update/:id, /delete/:id) used by frontend
router.route("/update/:id").put(verifyAdmin, upload.single("image"), updateMember);
router.route("/delete/:id").delete(verifyAdmin, deleteMember);

router.route("/:id").put(verifyAdmin, upload.single("image"), updateMember);
router.route("/:id").delete(verifyAdmin, deleteMember);

export default router;
