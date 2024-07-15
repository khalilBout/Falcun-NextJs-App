import Serie from "@/models/serie";
import connectDB from "@/Utils/connectDB";

export const getSeries = async (page) => {
  const ITEM_PER_PAGE = 12;

  try {
    await connectDB();
    const count = await Serie.find().count();
    const allSeries = await Serie.find()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, allSeries };
  } catch (err) {
    console.error("Error fetching Series:", err);
    throw new Error("Error fetching Series");
  }
};

export const getSerieById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/series/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
