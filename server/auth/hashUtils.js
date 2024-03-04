import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const hashing = (val) => {
  return bcrypt.hash(val, 10);
};
export const compareHash = (unhashed, hashed) => {
  return bcrypt.compare(unhashed, hashed);
};

//just to produce unique id
export const generateUniqueKey = () => {
  // Generate a UUID and take its last 4 characters
  const uniqueKey = uuidv4().split("-").pop().substring(0, 5);
  return uniqueKey;
};
