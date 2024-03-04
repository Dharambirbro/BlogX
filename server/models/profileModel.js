import mongoose from "mongoose";

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
    profile_id: {
      type: String,
    },
    first_name: {
      type: String,
      trim: true,
    },
    middle_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["customer", "seller"],
      default: "customer",
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
    emails: [
      {
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
    ],
    contactNumber: {
      type: String,
    },
    language: {
      type: String,
    },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
        review: { type: String },
        image: { typr: String },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
      },
    ],
    website: {
      type: String,
    },
    socialMedia: {
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
      // Add other social media platforms as needed
    },
    profileImage: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

profileSchema.pre("save", async function (next) {
  if (!this.isModified("first_name") && !this.isModified("last_name")) {
    return next();
  }

  this.name = `${this.first_name} ${this.last_name}`;
  next();
});
export const Profile = mongoose.model("Profile", profileSchema);
