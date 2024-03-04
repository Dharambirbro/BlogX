import mongoose from "mongoose";

// Define the schema based on the dataType

const blogContentSchema = mongoose.Schema({
  link: { type: String, trim: true },
  links: {
    type: Array,
    default: [],
  },
  info: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  content: [
    {
      key: String,
      data: {},
    },
  ],
});
export const BlogContent = mongoose.model("BlogContent", blogContentSchema);
