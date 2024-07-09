import Video from "@/models/video";
import connectDB from "@/Utils/connectDB";

export const getVideo = async (page, levels) => {
  const ITEM_PER_PAGE = 12;
  // const regex = new RegExp(search, "i");

  try {
    connectDB();

    if (levels === "all" || levels === "" || levels === undefined) {
      const count = await Video.find().count();
      const allVideos = await Video.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allVideos };
    } else {
      const count = await Video.find({
        levels: levels,
      }).count();
      const allVideos = await Video.find({
        levels: levels,
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allVideos };
    }
  } catch (err) {
    console.log("err:", err);
    // throw new Error("Failed to fetch products!");
  }
};
