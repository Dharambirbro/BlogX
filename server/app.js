import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

export const app = express();

// Connect to MongoDB
import { connectDB } from "./helpers/databaseConnect.js";
connectDB();

// Enable CORS with secure configuration
import { configCors } from "./config/config.js";
app.use(cors(configCors));

// Middleware;
import multer from "multer";
const upload = multer({}); //midddleware for handeling file
app.use(upload.any());
app.use(express.json());

//in interval running function
import { updateJsonDataInterval } from "./utils/interval.js";
setInterval(updateJsonDataInterval, 24 * 60 * 60 * 1000); //works every 24 hr

// Routes
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import coursesRoutes from "./routes/courseRoute.js";
import { routErr } from "./middleware/errorMiddleware.js";

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/courses", coursesRoutes);
app.all("*", routErr);

// Error handling middleware
import { errorControl } from "./controllers/errorController.js";
import { unhandledRejection } from "./middleware/errorMiddleware.js";
app.use(errorControl);
process.on("unhandledRejection", unhandledRejection);
