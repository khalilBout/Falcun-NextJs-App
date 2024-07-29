import { NextResponse } from "next/server";
import connectDB from "@/Utils/connectDB";
import Level from "@/models/level";

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Level.findByIdAndDelete(id);

    return new NextResponse("Level Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export async function GET(request, { params }) {
  const LevelID = params.id;
  try {
    const level = await Level.findById(LevelID);
    return new NextResponse(JSON.stringify(level), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

export const PUT = async (request, { params }) => {
  console.log("start update ...........");
  const { id } = params;
  // const data   = await request.json();
  // console.log("data=",data);

  const { title, listClass } = await request.json();

  try {
    await connectDB();
    await Level.findByIdAndUpdate(id, {
      title: title,
      listClass: listClass,
    });
    return new NextResponse("Level updated", { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
