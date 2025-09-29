import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import memberRoute from "./routes/member.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api/members",memberRoute);

app.get("/",(req,res)=>{
    res.send("Comes from pathagara backend");
});

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Started on port: ${PORT}`);
});
