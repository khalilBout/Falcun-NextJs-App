import mongoose from "mongoose";

const LibrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Level Title"],
  },
  address: {
    type: String,
    required: [true],
  },
});

const Libry = mongoose.models.Librys || mongoose.model("Librys", LibrySchema);

export default Libry;
