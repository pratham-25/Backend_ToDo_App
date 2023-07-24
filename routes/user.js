import express from "express";
import { User } from "../models/user.js";
import { addNewUser, getUserDetails, getUsersAll } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getUsersAll);

router.post("/new", addNewUser);

router.get("/userId/:id", getUserDetails);

export default router;