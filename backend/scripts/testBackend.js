import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { setServers } from "node:dns";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

try { setServers(["8.8.8.8", "8.8.4.4"]); } catch (e) {}

const testBackend = async () => {
  try {
    console.log("Verifying User & Admin Model integrity in MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    const admin = await User.findOne({ username: "jagnyadatta" });
    if (!admin) {
      throw new Error("Admin user not found!");
    }
    console.log("✓ Admin user exists:", admin.username, "isAdmin:", admin.isAdmin);
    if (!admin.isAdmin) {
      throw new Error("Admin user must have isAdmin: true");
    }

    // Verify only ONE user has isAdmin: true
    const adminCount = await User.countDocuments({ isAdmin: true });
    console.log("✓ Number of administrators in DB:", adminCount);
    if (adminCount !== 1) {
      throw new Error(`Expected exactly 1 admin, found ${adminCount}`);
    }

    // Test password hashing
    const passwordMatch = await bcrypt.compare("Admin@PKP1955#", admin.password);
    console.log("✓ Password hash comparison:", passwordMatch ? "MATCHED" : "FAILED");
    if (!passwordMatch) {
      throw new Error("Password verification failed!");
    }

    // Test JWT generation and validation
    const secret = process.env.JWT_SECRET || "pkp_gopabandhu_secret_key_2025_safe_jwt_secure_session";
    const token = jwt.sign({ userId: admin._id, username: admin.username, isAdmin: admin.isAdmin }, secret, { expiresIn: "1h" });
    const decoded = jwt.verify(token, secret);
    console.log("✓ JWT token generated and verified:", decoded.username, "isAdmin:", decoded.isAdmin);

    console.log("ALL BACKEND AUTH & USER CHECKS PASSED SUCCESSFULLY!");
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  }
};

testBackend();
