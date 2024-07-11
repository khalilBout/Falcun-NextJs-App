import Order from "@/models/order";
import connectDB from "@/Utils/connectDB";

export const getOrder = async (page, process) => {
  const ITEM_PER_PAGE = 12;
  // const regex = new RegExp(search, "i");

  try {
    connectDB();

    if (process === "all" || process === "" || process === undefined) {
      const count = await Order.find().count();
      const allOrders = await Order.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allOrders };
    } else {
      const count = await Order.find({
        isProcess: process,
      }).count();
      const allOrders = await Order.find({
        isProcess: process,
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allOrders };
    }
  } catch (err) {
    console.log("err:", err);
    // throw new Error("Failed to fetch products!");
  }
};
