import { CustomError } from "../utils/error.js";

const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};
const castErrorHandler = (err) => {
  const msg = `Invalid value ${err.value} for field ${err.path}`;
  return new CustomError(msg, 400);
};
const duplicateKeyErrorHandler = () => {
  // const msg = `There is already a user with that ${}`;
  return new CustomError("duplicate key error");
};
const validationErrorHandler = (err) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const errorMessages = errors.join(". ");
  const msg = `Invalid input data: ${errorMessages}`;
  return new CustomError(msg, 400);
};
const prodErrors = (res, error) => {
  console.log(error.isOperational);
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "something went wrong!Please try again later",
    });
  }
};

export const errorControl = (error, req, res, next) => {
  console.log(error);
  console.log(error.name + "ssssssssssssss");
  if (process.env.NODE_ENV === "development") {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";
    devErrors(res, error);
  } else if (process.env.NODE_ENV === "production") {
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);
    prodErrors(res, error);
  }
};

//we can wrap this function in any function and not need to use try catch method
// we need to pass next too on them
export const asyncErrorHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
  };
};
