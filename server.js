import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
