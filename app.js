import express from "express";
import userRouter from "../API and Params/routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middleware
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Working fine");
});
