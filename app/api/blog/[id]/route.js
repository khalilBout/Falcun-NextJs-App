import Blog from "@/models/blog";
import connectDB from "@/Utils/connectDB";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const BlogID = params.id;
  try {
    const blog = await Blog.findById(BlogID);
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Blog.findByIdAndDelete(id);

    return new NextResponse("Blog Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
