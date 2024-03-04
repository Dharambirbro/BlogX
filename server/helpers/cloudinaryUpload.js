import { v2 as cloudinary } from "cloudinary";
import { CustomError } from "../utils/error.js";

import { configCloudinary } from "../config/config.js";

cloudinary.config(configCloudinary);

export const cloudinaryUpload = async (image, folder) => {
  try {
    if (!image || image.length === 0) {
      return res.status(400).json({ error: "No image data received" });
    }

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "image", folder: folder },
          (error, result) => {
            if (error) {
              const err = new CustomError(
                "Error uploading image to Cloudinary",
                500
              );
              reject(err);
            } else {
              //   const imageUrl = result.secure_url;
              resolve(result);
            }
          }
        )
        .end(image);
    });
  } catch (error) {
    console.log("cannot upload image", error);
  }
};
