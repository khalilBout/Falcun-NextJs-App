import { NextResponse } from "next/server";
import Video from "@/models/video";
import connectDB from "@/Utils/connectDB";

export const GET = async (request) => {
  try {
    await connectDB();
    const videos = await Video.find();
    return new NextResponse(JSON.stringify(videos), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newVideo = new Video(body);
  try {
    await connectDB();
    await newVideo.save();
    return new NextResponse("Video has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
