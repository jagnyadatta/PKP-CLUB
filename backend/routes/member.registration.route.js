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

/**
 * Middleware to check if registration is currently enabled
 * Requirement 1: Temporarily disable registration without deleting code.
 * Toggleable via process.env.REGISTRATION_ENABLED
 */
const checkRegistrationEnabled = (req, res, next) => {
  const isEnabled = process.env.REGISTRATION_ENABLED === "true";
  if (!isEnabled) {
    return res.status(403).json({
      success: false,
      message: "ସଦସ୍ୟତା ପଞ୍ଜୀକରଣ ବର୍ତ୍ତମାନ ପାଇଁ ସ୍ଥଗିତ ରଖାଯାଇଛି (User registration is temporarily closed. Please check back later).",
      registrationClosed: true
    });
  }
  next();
};

// Public registration route (guarded by registration enabled check)
router.post("/register", checkRegistrationEnabled, upload.single("image"), registerMember);

// Member profile routes (preserved)
router.get("/profile/:id", getMemberProfile);
router.put("/profile/:id", upload.single("image"), updateMemberProfile);
router.delete("/profile/:id", deleteMemberProfile);

export default router;
