import express from "express";

import { getCourse } from "../controllers/courseController.js";

const coursesRoutes = express.Router();

coursesRoutes.get("/course", getCourse);

export default coursesRoutes;
