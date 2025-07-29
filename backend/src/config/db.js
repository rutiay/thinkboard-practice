import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGOBD CONNECTED");
  } catch (error) {
    console.error("Error connecting");
    process.exit(1);
  }
};
