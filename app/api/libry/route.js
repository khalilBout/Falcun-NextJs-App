import { NextResponse } from "next/server";
import Libry from "@/models/libry";
import connectDB from "@/Utils/connectDB";

export const GET = async (request) => {
  try {
    await connectDB();
    const librys = await Libry.find();
    return new NextResponse(JSON.stringify(librys), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newLibry = new Libry(body);
  // console.log("new Level reseved", newLevel);
  try {
    await connectDB();
    await newLibry.save();
    return new NextResponse("new Libry has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
