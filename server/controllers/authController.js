import { User } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { CustomError } from "../utils/error.js";
import { generateToken } from "../auth/jwtUtils.js";

// export const register = asyncHandler(async (req, res, next) => {
//   const {
//     first_name,
//     middle_name,
//     last_name,
//     email,
//     password,
//     confirm_password,
//     pic,
//   } = req.body;
//   if (!first_name || !last_name || !email || !password || !confirm_password) {
//     const error = new CustomError("Please enter all the fields !!", 400);
//     return next(error);
//   }

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     const error = new CustomError("User already exists !!", 409);
//     return next(error);
//   }

//   //making profile of user
//   const response = await axios.post(
//     "http://localhost:8080/api/profiles/create",
//     {
//       first_name,
//       middle_name,
//       last_name,
//       email,
//     }
//   );
//   const profile = await response.data;
//   if (!profile) {
//     throw new Error("Failed to create the User");
//   }

//   const user = await User.create({
//     first_name,
//     middle_name,
//     last_name,
//     email,
//     password,
//     confirm_password,
//     pic,
//     profile,
//   });
//   await user.populate("profile");

//   // Access the profile object
//   const userProfile = user.profile;
//   userProfile.user = user._id;
//   await userProfile.save({ validateBeforeSave: false });

//   console.log(userProfile);

//   if (user) {
//     res.status(201),
//       res.json({
//         name: user.first_name,
//         email: user.email,
//         pic: user.pic,
//       });
//   } else {
//     throw new Error("Failed to create the User");
//   }
// });

export const register = asyncHandler(async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    country,
    role,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !confirm_password ||
    !country
  ) {
    const error = new CustomError("Please enter all the fields !!", 400);
    return next(error);
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new CustomError("User already exists !!", 409);
    return next(error);
  }

  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  });
  if (!user) {
    const error = new CustomError("Failed to create user!!", 409);
    return next(error);
  }
  //creating profile
  const isProfile = await user.createProfile(country, role);

  if (isProfile) {
    res.status(201),
      res.json({
        name: user.first_name,
        email: user.email,
      });
  } else {
    throw new Error("Failed to create the User and profile");
  }
});

export const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = new CustomError("please enter all fields", 400);
    return next(error);
  }

  const user = await User.findOne({ email });
  if (!user) {
    const error = new CustomError("Incorrect password or Email", 400);
    return next(error);
  }
  const isMatch = await user.matchPassword(password);
  if (!user || !isMatch) {
    const error = new CustomError("Incorrect password or Email", 400);
    return next(error);
  }
  req.session.userId = user._id;
  res.status(200).json({
    status: "success",
    name: user.first_name,
    email: user.email,
    pic: user.pic,
    token: generateToken(user._id),
    profile: generateToken(user.profile),
  });
});

export const logOut = asyncHandler(async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/login");
  });
});
