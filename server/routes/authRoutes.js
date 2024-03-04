import express from "express";
import { register, authUser, logOut } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter
  .post("/register", register)
  .post("/login", authUser)
  .post("/logout", logOut);

export default authRouter;
