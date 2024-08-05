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

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Video.findByIdAndDelete(id);

    return new NextResponse("Video Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  // console.log("start update ...........");
  const { id } = params;
  // const data   = await request.json();
  // console.log("data=",data);

  const {
    title,
    description,
    levelsInf,
    TheClass,
    season,
    urlVideo,
    urlYoutube,
    unitList,
    videoCover,
  } = await request.json();

  try {
    await connectDB();
    await Video.findByIdAndUpdate(id, {
      title: title,
      description: description,
      levelsInf: levelsInf,
      TheClass: TheClass,
      season: season,
      urlVideo: urlVideo,
      urlYoutube: urlYoutube,
      unitList: unitList,
      videoCover: videoCover,
    });
    return new NextResponse("video updated", { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
