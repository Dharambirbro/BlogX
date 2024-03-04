import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: String,
  img: String,
  category: String,
  subCategory: String,
  contents: [
    {
      topic: String,
      subTopics: Array,
    },
  ],
  data: [
    {
      topic: String,
      value: {},
      subTopic: [
        {
          title: String,
          value: {},
        },
      ],
    },
  ],
});
export const Courses = mongoose.model("Courses", courseSchema);
