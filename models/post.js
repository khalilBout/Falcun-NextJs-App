import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Post Title"],
  },
  description: {
    type: String,
    required: [true, "Please enter Post description"],
  },
  category: {
    type: String,
    required: [true],
    enum: {
      values: ["cultural", "social", "educational", "sports"],
    },
  },
  postImages: [
    {
      urlImage: { type: String, required: [true] },
      public_id: { type: String, required: [true] },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models.Posts || mongoose.model("Posts", PostSchema);

export default Post;
