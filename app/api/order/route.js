import { NextResponse } from "next/server";
import connectDB from "@/Utils/connectDB";
import Order from "@/models/order";
import Book from "@/models/book";

export const POST = async (request) => {
  const body = await request.json();
  console.log(" start save Order--------------------------");

  const { userName, email, shippingAddress, orderItems, totolPyment } = body;

  // const promises = BooksOrder.map(async (item) => {
  //   const TheBookOrder = await Book.findById(item.bookID);
  //   const bookID = TheBookOrder._id;
  //   const priceBook = TheBookOrder.price;
  //   const titleBook = TheBookOrder.title;
  //   const bookCover = TheBookOrder.bookCover.url;
  //   const season = TheBookOrder.season;
  //   const level = TheBookOrder.level;
  //   const Qt = item.Qt;

  //   return {
  //     bookID,
  //     titleBook,
  //     priceBook,
  //     bookCover,
  //     season,
  //     level,
  //     Qt,
  //   };
  // });

  // const orderItems = await Promise.all(promises);
  // const ShippingExpenses = 80;

  // const totolPyment = orderItems.reduce(
  //   (total, item) => item.priceBook * item.Qt + total,
  //   ShippingExpenses
  // );
  const dataOrder = {
    userName,
    email,
    shippingAddress,
    orderItems,
    totolPyment,
  };
  console.log("data Order final --------", dataOrder);

  try {
    await connectDB();

    await Order.create(dataOrder);
    return new NextResponse("Order created. ", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
