import express from "express";

import {
  getBlog,
  getRecentBlog,
  postBlog,
  getBlogCategory,
  getCategory,
  getSpecificBlog,
  testing,
  testing2,
  testing3,
} from "../controllers/blogController.js";

const blogRoutes = express.Router();

blogRoutes
  .post("/blog", postBlog)
  .get("/blog", getBlog)
  .get("/recent", getRecentBlog)
  .get("/categories/:category", getBlogCategory)
  .get("/data", getCategory)
  .get("/specific/:link", getSpecificBlog)
  .post("/testing", testing)
  .post("/testing2/:link", testing2)
  .get("/testing3", testing3);

export default blogRoutes;
