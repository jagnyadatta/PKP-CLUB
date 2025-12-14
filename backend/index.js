import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import memberRoute from "./routes/member.route.js";
import memberRegistrationRoute from "./routes/member.registration.route.js"; // Add this line
import https from "https";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Existing admin routes
app.use("/api/members", memberRoute);

// New member self-registration routes
app.use("/api/register", memberRegistrationRoute); // Add this line

app.get("/", (req, res) => {
  res.send("Comes from pathagara backend");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Started on port: ${PORT}`);
});

setInterval(() => {
  https.get("https://gopabandhuclubpkp.onrender.com/", (res) => {
    console.log("Self-ping success:", res.statusCode);
  }).on("error", (err) => {
    console.error("Self-ping error:", err.message);
  });
}, 14 * 60 * 1000);
