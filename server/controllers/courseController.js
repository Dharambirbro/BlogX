import asyncHandler from "express-async-handler";
import { Courses } from "../models/CourseModel.js";

export const getCourse = asyncHandler(async (req, res, next) => {
  res.send("successs");
});
