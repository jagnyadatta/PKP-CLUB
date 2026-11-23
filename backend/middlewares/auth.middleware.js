import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

/**
 * Middleware to verify JWT token
 */
export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No authentication token provided. Please log in.",
      });
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET || "pkp_gopabandhu_secret_key_2025_safe_jwt_secure_session";

    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User account not found or inactive.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired authentication token.",
      error: error.message,
    });
  }
};

/**
 * Middleware to verify Administrator privileges
 * Requirement 3: Every admin API must independently verify admin privileges.
 * Protects against unauthorized role changes and privilege escalation.
 */
export const verifyAdmin = async (req, res, next) => {
  await verifyToken(req, res, async () => {
    try {
      if (!req.user || req.user.isAdmin !== true) {
        return res.status(403).json({
          success: false,
          message: "Access Denied: Administrator privileges are required to perform this action. (କେବଳ ଆଡମିନଙ୍କ ପାଇଁ ଅନୁମତି ଅଛି)",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error during authorization verification.",
      });
    }
  });
};
