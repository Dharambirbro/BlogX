import mongoose from "mongoose";
import { generateUniqueKey } from "../auth/hashUtils.js";
import { BlogContent } from "./BlogContentModel.js";
import { CustomError } from "../utils/error.js";

export function generateLink(inputString) {
  // Remove all spaces and special character
  let stringWithoutSpaces = inputString.replace(/[^\w]/gi, "");
  const separatedArray = stringWithoutSpaces.split(":");

  if (separatedArray.length != 1) {
    const title = separatedArray[0].trim().toLowerCase();
    let link = `/${title}&${generateUniqueKey()}`;
    return link;
  }

  // Truncate the string to a certain number of characters
  let maxLength = 20;
  let truncatedString = stringWithoutSpaces
    .substring(0, maxLength)
    .toLowerCase();

  let link = `/${truncatedString}&${generateUniqueKey()}`;
  return link;
}

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please enter title"],
  },
  link: { type: String },
  titles: [
    {
      title: { type: String, trim: true },
      link: String,
    },
  ],
  writer: String,
  img: { type: String, trim: true },
  // img: { type: String, trim: true, required: [true, "Please upload image"] },
  desc: {
    type: String,
    trim: true,
    required: [true, "Please enter description"],
  },
  category: {
    type: String,
    required: [true, "Please enter category"],
    trim: true,
    set: (value) => value.toLowerCase(),
  },
  areas: {
    type: Array,
    default: [],
    set: (areas) => areas.map((area) => area.toLowerCase()),
  },
  date: Date,
  popular: { type: Boolean },
  views: { type: Number, default: 0 },
  blogContent: { type: mongoose.Schema.Types.ObjectId, ref: "BlogContent" },
});

blogSchema.pre("save", async function (next) {
  this.link = generateLink(this.title);
  // filtering titles and returning generated links
  this.titles = this.titles
    .filter((value) => value.title !== "")
    .map((value) => {
      return { title: value.title, link: generateLink(value.title) };
    });
  // filtering areas and returning generated links

  this.areas = this.areas
    .filter((title) => title !== "")
    .map((value) => {
      return value;
    });

  if (!this.date) {
    this.date = new Date();
  }
  const contentId = await this.createBlogContent(next);
  this.blogContent = contentId;

  //  v important to use next as it will proceed to next middleware and saces the document otherwise doc wont be saved
  next();
});

blogSchema.methods.createBlogContent = async function (next) {
  let blogContent;

  if (this.titles.length) {
    const links = this.titles?.map((item) => {
      return item.link;
    });

    blogContent = await BlogContent.create({
      link: this.link,
      links,
      info: this._id,
    });
  } else {
    blogContent = await BlogContent.create({
      link: this.link,
      info: this._id,
    });
  }
  if (!blogContent) {
    const error = new CustomError("Failed to Create blog Content!!", 409);
    //deleting the blog if we fail to create the content model
    await this.deleteOne({ _id: this._id });
    return next(error);
  }
  return blogContent._id;
};

blogSchema.methods.incrementViews = async function () {
  this.views += 1;
  if (this.views > 100) {
    this.popular = true;
  }
  await this.save();
};

// Statics method to update popularity status for all documents in the collection
// blogSchema.statics.updatePopularity = async function () {
//   const blogs = await this.find({ views: { $gt: 100 } }); // Find documents where views > 100
//   for (const blog of blogs) {
//     blog.popular = true;
//     await blog.save();
//   }
// };

export const Blog = mongoose.model("Blog", blogSchema);
