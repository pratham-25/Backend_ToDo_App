import { User } from "../models/user.js";

export const getUsersAll = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users: users,
  });
};

export const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name: name,
    email: email,
    password: password,
  });

  console.log(req.params);

  res.cookie("temp", "cook", {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });

  res.status(201).json({
    success: true,
    message: "User added successfully",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};
