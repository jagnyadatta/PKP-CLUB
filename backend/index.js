import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import memberRoute from "./routes/member.route.js";
import memberRegistrationRoute from "./routes/member.registration.route.js";
import https from "https";
import { setServers } from "node:dns";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

const NODE_ENV = process.env.NODE_ENV || "development";

// Local development DNS workaround
// Production will continue using its default DNS configuration.
if (NODE_ENV === "development") {
  setServers(["8.8.8.8", "8.8.4.4"]);
  console.log("Development DNS configured:", ["8.8.8.8", "8.8.4.4"]);
}

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:8080", "https://gopabandhuclubpkp.onrender.com", "*"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", name: "Gopabandhu Pathagara API", timestamp: new Date().toISOString() });
});

// Admin & public member routes
app.use("/api/members", memberRoute);

// Member self-registration routes
app.use("/api/register", memberRegistrationRoute);

app.get("/", (req, res) => {
  res.send("Comes from Gopabandhu Pathagara backend (Paikarapur)");
});

// Central error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error"
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Started on port: ${PORT}`);
});

// Self-ping keeping alive on Render if in production
if (process.env.NODE_ENV === "production") {
  setInterval(() => {
    https.get("https://gopabandhuclubpkp.onrender.com/", (res) => {
      console.log("Self-ping success:", res.statusCode);
    }).on("error", (err) => {
      console.error("Self-ping error:", err.message);
    });
  }, 14 * 60 * 1000);
}
