import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/Utils/connectDB";

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    await connectDB();
    const Products = await Product.find();
    return new NextResponse(JSON.stringify(Products), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newProduct = new Product(body);
  try {
    await connectDB();
    await newProduct.save();
    return new NextResponse("new product has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
