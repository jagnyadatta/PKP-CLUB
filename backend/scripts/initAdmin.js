import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { setServers } from "node:dns";
import { User } from "../models/user.model.js";

// Fix DNS for MongoDB Atlas SRV resolution on Windows
try {
  setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  // ignore
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

/**
 * One-Time Admin Account Initialization / Promotion Script
 * Requirement 2:
 * - Ensures Boolean field 'isAdmin' is present
 * - Enforces ONLY ONE administrator in the database
 * - Sets isAdmin: true only for the administrator account
 * - Preserves existing user data
 */
const initAdmin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("Error: MONGO_URI is missing from backend/.env");
      process.exit(1);
    }

    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB successfully.");

    // Admin credentials from CLI args or environment variables or safe defaults
    const adminUsername = process.env.ADMIN_USERNAME || process.argv[2] || "jagnyadatta";
    const adminEmail = process.env.ADMIN_EMAIL || process.argv[3] || "admin@gopabandhuclub.com";
    const adminPassword = process.env.ADMIN_PASSWORD || process.argv[4] || "Admin@PKP1955#";
    const adminName = "Jagnyadatta Dalai (Admin)";

    console.log(`Setting up single administrator account: ${adminUsername} (${adminEmail})`);

    // First: Reset isAdmin: false on all existing users to ensure only one administrator exists
    const resetResult = await User.updateMany(
      { email: { $ne: adminEmail.toLowerCase() }, username: { $ne: adminUsername.toLowerCase() } },
      { $set: { isAdmin: false } }
    );
    console.log(`Ensured no duplicate administrators: ${resetResult.modifiedCount} accounts set to isAdmin: false.`);

    // Check if the target admin user already exists
    let adminUser = await User.findOne({
      $or: [{ email: adminEmail.toLowerCase() }, { username: adminUsername.toLowerCase() }],
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    if (adminUser) {
      console.log(`Existing user found for ${adminUser.username}. Promoting to Administrator...`);
      adminUser.username = adminUsername.toLowerCase();
      adminUser.email = adminEmail.toLowerCase();
      adminUser.password = hashedPassword;
      adminUser.name = adminName;
      adminUser.isAdmin = true;
      adminUser.isActive = true;
      await adminUser.save();
      console.log("Admin account successfully updated with isAdmin: true.");
    } else {
      console.log("Creating new Administrator account...");
      adminUser = new User({
        username: adminUsername.toLowerCase(),
        email: adminEmail.toLowerCase(),
        password: hashedPassword,
        name: adminName,
        isAdmin: true,
        isActive: true,
      });
      await adminUser.save();
      console.log("Admin account successfully created with isAdmin: true.");
    }

    console.log("--------------------------------------------------");
    console.log("ADMIN INITIALIZATION COMPLETED SAFELY");
    console.log(`Username: ${adminUsername.toLowerCase()}`);
    console.log(`Email:    ${adminEmail.toLowerCase()}`);
    console.log(`Password: ${adminPassword}`);
    console.log(`isAdmin:  true (Unique Admin)`);
    console.log("--------------------------------------------------");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Failed to initialize administrator:", error);
    process.exit(1);
  }
};

initAdmin();
