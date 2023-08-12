import express from "express";
import {
  login,
  register,
  logout,
  getAllUsers,
  getMyDetails,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/login", login);

router.post("/register", register);

router.get("/me", isAuthenticated, getMyDetails);

router.get("/logout", logout);

export default router;
