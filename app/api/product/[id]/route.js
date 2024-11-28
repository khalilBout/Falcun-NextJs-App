import Product from "@/models/product";
import connectDB from "@/Utils/connectDB";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const ProductID = params.id;
  try {
    const product = await Product.findById(ProductID);
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Product.findByIdAndDelete(id);

    return new NextResponse("Product Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
