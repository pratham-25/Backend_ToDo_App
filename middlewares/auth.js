import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(404).json({
      success: false,
      message: "Login first",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById({ _id: decoded._id });

  next();
};
