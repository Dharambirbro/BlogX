import mongoose from "mongoose";
import { hashing, compareHash } from "../auth/hashUtils.js";
import axios from "axios";

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: [true, "Please enter the name"] },
    last_name: { type: String, required: [true, "Please enter the lastname"] },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please enter the valid Email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: { type: String, required: [true, "Please enter the password"] },
    confirm_password: {
      type: String,
      required: [true, "Please enter the password"],
      validate: {
        validator: function (val) {
          return val == this.password;
        },
        message: "password and confirm password do not match",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await hashing(this.password);
  this.confirm_password = undefined;
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  const isAuth = await compareHash(enteredPassword, this.password);
  return isAuth;
};

userSchema.methods.createProfile = async function (country, role) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/profiles/create",
      {
        first_name: this.first_name,
        last_name: this.last_name,
        emails: this.email,
        role: this.role,
        country,
        role,
        user: this._id,
      }
    );
    const profile_id = await response.data;
    this.profile = profile_id;
    await this.save({ validateBeforeSave: false });
    return true;
  } catch (err) {
    if (!this.profile) {
      await this.deleteOne({ _id: this._id });
    } else {
      await this.populate("profile");
      const profile = this.profile;
      await profile.deleteOne({ _id: profile._id });
      await this.deleteOne({ _id: this._id });
    }
    return false;
  }
};

export const User = mongoose.model("User", userSchema);
