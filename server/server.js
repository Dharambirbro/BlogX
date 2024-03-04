import { app } from "./app.js";
const PORT = process.env.PORT || 8080;

export const server = app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
