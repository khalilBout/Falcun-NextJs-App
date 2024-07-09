import Level from "@/models/level";
import connectDB from "@/Utils/connectDB";

export const getLevels = async () => {
  try {
    connectDB();
    const count = await Level.find().count();
    const allLevels = await Level.find();

    return { count, allLevels };
  } catch (err) {
    console.log("err:", err);
  }
};
