import Level from "@/models/level";
import connectDB from "@/Utils/connectDB";

export const getLevels = async () => {
  try {
    connectDB();
    const count = await Level.find().count();
    const allLevel = await Level.find();
    const allLevels = JSON.parse(JSON.stringify(allLevel));

    return { count, allLevels };
  } catch (err) {
    console.log("err:", err);
  }
};
