import Book from "@/models/book";
import connectDB from "@/Utils/connectDB";

export const getBooks = async (page, levels, season) => {
  const ITEM_PER_PAGE = 12;

  try {
    await connectDB();

    const query = {};
    if (season !== "all" && season !== "") {
      query.season = season;
    }
    if (levels !== "all") {
      query["levelsInf.levelTitle"] = levels;
    }

    const count = await Book.countDocuments(query);
    const allBooks = await Book.find(query)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, allBooks };
  } catch (err) {
    console.error("Error fetching books:", err);
    throw new Error("Error fetching books");
  }
};

// export const getBooks = async (page, levels, season) => {
//   const ITEM_PER_PAGE = 12;
//   // const regex = new RegExp(search, "i");

//   try {
//     connectDB();
//     if (season === "all" || season === "") {
//       if (levels === "all") {
//         const count = await Book.find().count();
//         const allBooks = await Book.find()
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allBooks };
//       } else {
//         const count = await Book.find({
//           "levelsInf.levelTitle": levels,
//         }).count();
//         const allBooks = await Book.find({
//           // levels: levels,
//           "levelsInf.levelTitle": levels,
//         })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allBooks };
//       }
//     } else {
//       if (levels === "all") {
//         const count = await Book.find({ season: season }).count();
//         const allBooks = await Book.find({ season: season })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allBooks };
//       } else {
//         const count = await Book.find({
//           season: season,
//           "levelsInf.levelTitle": levels,
//         }).count();
//         const allBooks = await Book.find({
//           // levels: levels,
//           season: season,
//           "levelsInf.levelTitle": levels,
//         })
//           .limit(ITEM_PER_PAGE)
//           .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, allBooks };
//       }
//     }
//   } catch (err) {
//     console.log("err:", err);
//   }
// };

export const getBookById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/books/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// try {
//   connectDB();
//   if (season === "all" || season === "") {
//     // if (levels === "all") {
//     const count = await Book.find().count();
//     const allBooks = await Book.find()
//       .limit(ITEM_PER_PAGE)
//       .skip(ITEM_PER_PAGE * (page - 1));
//     return { count, allBooks };
//   } else {
//     const count = await Book.find({
//       season: season,
//     }).count();
//     const allBooks = await Book.find({
//       // levels: levels,
//       season: season,
//     })
//       .limit(ITEM_PER_PAGE)
//       .skip(ITEM_PER_PAGE * (page - 1));
//     return { count, allBooks };
//   }
// } catch (err) {
//   console.log("err:", err);
// }
