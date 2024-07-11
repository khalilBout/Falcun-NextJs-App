import Book from "@/models/book";
import connectDB from "@/Utils/connectDB";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const bookID = params.id;
  try {
    const book = await Book.findById(bookID);
    return new NextResponse(JSON.stringify(book), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}
