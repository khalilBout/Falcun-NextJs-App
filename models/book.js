import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
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
  levelsInf: {
    levelID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Level",
    },
    levelTitle: {
      type: String,
      required: [true],
    },
  },
  numberOfPages: {
    type: Number,
    required: [false],
  },
  season: {
    type: String,
    required: [true],
    enum: {
      values: ["season-1", "season-2"],
    },
  },
  bookCover: {
    type: String,
    required: [true],
  },
  contentBook: [
    {
      type: String,
      required: [false],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.models.Books || mongoose.model("Books", BookSchema);

export default Book;
