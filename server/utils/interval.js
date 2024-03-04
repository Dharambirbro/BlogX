import { Blog } from "../models/BlogModel.js";
import { updateJSONFile } from "../data/fileHandler.js";

export const updateJsonDataInterval = async () => {
  const blogs = await Blog.find();
  const categories = blogs.map((blog) => {
    return [blog.areas, blog.category];
  });

  const flatArray = categories.flat().flat();
  // counting number of stories we have

  let counts = {};
  flatArray.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  // console.log(flatArray);
  const uniqueArray = [...new Set(flatArray.map((item) => item.toLowerCase()))];
  // console.log(uniqueArray);
  // updating counts of the file
  await updateJSONFile("blogData.json", "counts", counts);
  //updating json data in the file of where there is areas
  await updateJSONFile("blogData.json", "areas", uniqueArray);
};
