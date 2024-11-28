import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter product Title"],
  },
  category: {
    type: String,
    required: [true, "Please Enter product category"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  mainImg: {
    type: String,
    required: [true],
  },
  listImage: [{ type: String, required: [false] }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
