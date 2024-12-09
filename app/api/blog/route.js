import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import connectDB from "@/Utils/connectDB";

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    await connectDB();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newBlog = new Blog(body);
  try {
    await connectDB();
    await newBlog.save();
    return new NextResponse("new blog has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
