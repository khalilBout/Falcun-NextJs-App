import { NextResponse } from "next/server";
import connectDB from "@/Utils/connectDB";
import Order from "@/models/order";
import Book from "@/models/book";

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Order.findByIdAndDelete(id);

    return new NextResponse("Order Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const order = await request.json();

  const newOrder = {
    userName: order.userName || null,
    email: order.email || null,
    shippingAddress: order.shippingAddress,
    orderItems: order.orderItems,
    totolPyment: order.totolPyment,
    isProcess: false,
  };

  try {
    await connectDB();

    await Order.findByIdAndUpdate(id, newOrder);

    return new NextResponse("Order updated", { status: 200 });
  } catch (err) {
    console.log("err:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
