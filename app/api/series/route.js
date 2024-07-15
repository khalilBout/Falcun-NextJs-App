import { NextResponse } from "next/server";
import Serie from "@/models/serie";
import connectDB from "@/Utils/connectDB";

export const GET = async (request) => {
  try {
    await connectDB();
    const series = await Serie.find();
    return new NextResponse(JSON.stringify(books), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newSerie = new Serie(body);
  try {
    await connectDB();
    await newSerie.save();
    return new NextResponse("New Serie Has Been Created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
