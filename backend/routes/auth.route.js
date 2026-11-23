import express from "express";
import { login, getMe, logout } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", verifyToken, getMe);
router.post("/logout", logout);

export default router;
