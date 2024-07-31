import Video from "@/models/video";
import connectDB from "@/Utils/connectDB";

export const getVideo = async (page, levels, season, itemInPage) => {
  // const ITEM_PER_PAGE = 12;

  try {
    await connectDB();

    const query = {};
    if (season !== "all" && season !== "") {
      query.season = season;
    }
    if (levels !== "all") {
      query["levelsInf.levelTitle"] = levels;
    }

    const count = await Video.countDocuments(query);
    const allVideo = await Video.find(query)
      .limit(itemInPage)
      .skip(itemInPage * (page - 1));
    const allVideos = JSON.parse(JSON.stringify(allVideo));
    return { count, allVideos };
  } catch (err) {
    console.error("Error fetching videos:", err);
    throw new Error("Error fetching videos");
  }
};

// export const getVideo = async (page, levels, season) => {
//   const ITEM_PER_PAGE = 12;
//   // const regex = new RegExp(search, "i");
//   try {
//     connectDB();
//     if (season === "all" || season === "") {
//       if (levels === "all") {
//         const count = await Video.find().count();
//         const allVideos = await Video.find()
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allVideos };
//       } else {
//         const count = await Video.find({
//           "levelsInf.levelTitle": levels,
//         }).count();
//         const allVideos = await Video.find({
//           // levels: levels,
//           "levelsInf.levelTitle": levels,
//         })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allVideos };
//       }
//     } else {
//       if (levels === "all") {
//         const count = await Video.find({ season: season }).count();
//         const allVideos = await Video.find({ season: season })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allVideos };
//       } else {
//         const count = await Video.find({
//           season: season,
//           "levelsInf.levelTitle": levels,
//         }).count();
//         const allVideos = await Video.find({
//           // levels: levels,
//           season: season,
//           "levelsInf.levelTitle": levels,
//         })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allVideos };
//       }
//     }
//   } catch (err) {
//     console.log("err:", err);
//   }
// };

export const getVideoById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/video/${id}`, {
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

//  try {
//     connectDB();

//     if (levels === "all" || levels === "" || levels === undefined) {
//       const count = await Video.find().count();
//       const allVideos = await Video.find()
//         .limit(ITEM_PER_PAGE)
//         .skip(ITEM_PER_PAGE * (page - 1));
//       return { count, allVideos };
//     } else {
//       const count = await Video.find({
//         levels: levels,
//       }).count();
//       const allVideos = await Video.find({
//         levels: levels,
//       })
//         .limit(ITEM_PER_PAGE)
//         .skip(ITEM_PER_PAGE * (page - 1));
//       return { count, allVideos };
//     }
//   } catch (err) {
//     console.log("err:", err);

//   }
