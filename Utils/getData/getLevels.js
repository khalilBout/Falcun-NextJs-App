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

export const getLevelById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/levels/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    // const data = JSON.parse(JSON.stringify(res));

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
