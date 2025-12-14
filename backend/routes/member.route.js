import express from "express";
import upload from "../middlewares/multer.js"
import { addMember, deleteMember, getAllMembers, getMemberById, updateMember } from "../controllers/member.controller.js";

const router = express.Router();

router.route("/all").get(getAllMembers);
router.route("/new").post(upload.single("image"), addMember);
router.route("/:id").get(getMemberById);
router.route("/:id").put(upload.single("image"), updateMember);
router.route("/:id").delete(deleteMember)

export default router;