// routes/member.registration.route.js
import express from "express";
import upload from "../middlewares/multer.js";
import { 
  registerMember, 
  getMemberProfile,
  updateMemberProfile,
  deleteMemberProfile 
} from "../controllers/member.registration.controller.js";

const router = express.Router();

// Public registration route
router.post("/register", upload.single("image"), registerMember);

// Member profile routes (could be protected with authentication later)
router.get("/profile/:id", getMemberProfile);
router.put("/profile/:id", upload.single("image"), updateMemberProfile);
router.delete("/profile/:id", deleteMemberProfile);

export default router;
