import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("CONNECTED TO MONGODB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};
