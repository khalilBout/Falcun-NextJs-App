import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Level Title"],
  },
  listClass: [
    {
      type: String,
      required: [true],
    },
  ],
});

const Level = mongoose.models.Levels || mongoose.model("Levels", LevelSchema);

export default Level;
