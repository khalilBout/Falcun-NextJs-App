import { NextResponse } from "next/server";
import Book from "@/models/book";
import connectDB from "@/Utils/connectDB";

export const GET = async (request) => {
  try {
    await connectDB();
    const books = await Book.find();
    return new NextResponse(JSON.stringify(books), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newBook = new Book(body);
  try {
    await connectDB();
    await newBook.save();
    return new NextResponse("book has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
