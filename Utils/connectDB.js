import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connection Succesfful");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export default connectDB;
