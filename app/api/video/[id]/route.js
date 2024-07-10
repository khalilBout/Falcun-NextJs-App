import Video from "@/models/video";
import connectDB from "@/Utils/connectDB";
import { NextResponse } from "next/server";


connectDB();

export async function GET(request, { params }) {
  const videoID = params.id;
  try {
    const video = await Video.findById(videoID);
    return new NextResponse(JSON.stringify(video), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

