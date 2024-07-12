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

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Book.findByIdAndDelete(id);

    return new NextResponse("Book Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
