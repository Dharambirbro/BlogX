import { server } from "../server.js";
import { CustomError } from "../utils/error.js";

//works when no any ur matches
export const routErr = (req, res, next) => {
  const err = new CustomError(
    `cant find ${req.originalUrl} on the server`,
    404
  );
  console.log(err);
  next(new CustomError(`cant find the requested path on the server`, 404));
};

export const unhandledRejection = (err) => {
  console.log(err.name + " : " + err.message);
  console.log(err);
  console.log("unhandled rejection occured sutting down!");
  server.close(() => {
    process.exit(1);
  });
};
