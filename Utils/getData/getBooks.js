import Book from "@/models/book";
import connectDB from "@/Utils/connectDB";

export const getBooks = async (page, levels) => {
  const ITEM_PER_PAGE = 12;
  // const regex = new RegExp(search, "i");

  try {
    connectDB();

    if (levels === "all") {
      const count = await Book.find().count();
      const allBooks = await Book.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allBooks };
    } else {
      const count = await Book.find({
        levels: levels,
      }).count();
      const allBooks = await Book.find({
        levels: levels,
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allBooks };
    }
  } catch (err) {
    console.log("err:", err);
    // throw new Error("Failed to fetch products!");
  }
};

export const getBookById = async (id) => {
  console.log("start...");
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/books/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    console.log("data book:", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
