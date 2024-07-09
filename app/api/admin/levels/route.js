import { NextResponse } from "next/server";
import Level from "@/models/level";
import connectDB from "@/Utils/connectDB";

export const GET = async (request) => {
  try {
    await connectDB();
    const levels = await Level.find();
    return new NextResponse(JSON.stringify(levels), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newLevel = new Level(body);
  // console.log("new Level reseved", newLevel);
  try {
    await connectDB();
    await newLevel.save();
    return new NextResponse("Level has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
