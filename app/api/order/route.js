import { NextResponse } from "next/server";
import connectDB from "@/Utils/connectDB";
import Order from "@/models/order";
import Book from "@/models/book";

export const POST = async (request) => {
  const body = await request.json();

  const { userName, email, shippingAddress, BooksOrder } = body;

  const promises = BooksOrder.map(async (item) => {
    const TheBookOrder = await Book.findById(item.bookID);
    const bookID = TheBookOrder._id;
    const priceBook = TheBookOrder.price;
    const titleBook = TheBookOrder.title;
    const imageUrl = TheBookOrder.urlBook.url;
    const season = TheBookOrder.season;
    const level = TheBookOrder.level;
    const TheClass = TheBookOrder.TheClass;

    return {
      bookID,
      titleBook,
      priceBook,
      imageUrl,
      season,
      level,
      TheClass,
    };
  });

  const orderItems = await Promise.all(promises);

  const totolPyment = orderItems.reduce(
    (total, item) => item.priceBook + total,
    0
  );
  const dataOrder = {
    userName,
    email,
    shippingAddress,
    orderItems,
    totolPyment,
  };
  try {
    await connectDB();
    await Order.create(dataOrder);
    return new NextResponse("Order created. ", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
