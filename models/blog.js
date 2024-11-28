import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Post Title"],
  },
  description: {
    type: String,
    required: [true, "Please enter Post description"],
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

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export default Blog;
