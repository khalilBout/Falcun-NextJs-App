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
