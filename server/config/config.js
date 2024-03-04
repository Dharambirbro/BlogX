import dotenv from "dotenv";
dotenv.config();

export const configDB = {
  database: process.env.MONGO_URI,
  // secretKey: process.env.SECRET_KEY,
};

export const configCors = {
  origin: process.env.ALLOWED_ORIGIN,

  // Replace with your allowed origin(s)
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  credentials: true, // Allow cookies and session headers to be sent cross-origin
  optionsSuccessStatus: 204, // Set the response status for preflight requests
};

export const configCloudinary = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};
