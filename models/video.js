import mongoose from "mongoose";
import Level from "./level";

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Post Title"],
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
  TheClass: {
    type: String,
    required: [false],
  },
  season: {
    type: String,
    required: [true],
    enum: {
      values: ["season-1", "season-2"],
    },
  },
  urlVideo: {
    url: { type: String, required: [false] },
    public_id: String,
    thumbnail: String,
    // required: [true],
  },
  urlYoutube: { type: String, required: [false] },
  like: [
    {
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [false],
      },
    },
  ],
  listComment: [
    {
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: [true],
      },

      bodyComment: { type: String, required: [true] },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.models.Videos || mongoose.model("Videos", VideoSchema);

export default Video;
