import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected Successfully with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
