import mongoose from "mongoose";

const SerieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Post Title"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Book price"],
  },
  description: {
    type: String,
    required: [true, "Please enter Post description"],
  },

  numberOfPages: {
    type: Number,
    required: [false],
  },

  bookCover: {
    url: { type: String, required: [true] },
    public_id: String,
  },
  contentBook: [
    {
      url: { type: String, required: [true] },
      public_id: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Serie = mongoose.models.Series || mongoose.model("Series", SerieSchema);

export default Serie;
