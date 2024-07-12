import Libry from "@/models/libry";
import connectDB from "@/Utils/connectDB";

export const getlibrarys = async () => {
  try {
    connectDB();
    const count = await Libry.find().count();
    const allLibrys = await Libry.find();

    return { count, allLibrys };
  } catch (err) {
    console.log("err:", err);
  }
};
