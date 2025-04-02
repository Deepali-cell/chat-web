import mongoose from "mongoose";

const mongoDbConnect = async () => {
  mongoose.connection.on("connected", () => {
    console.log("mongoDB is connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/chatapp`);
};
export default mongoDbConnect;
