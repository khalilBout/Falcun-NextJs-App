import { NextResponse } from "next/server";
import connectDB from "@/Utils/connectDB";
import Libry from "@/models/libry";

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Libry.findByIdAndDelete(id);

    return new NextResponse("Libry Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
