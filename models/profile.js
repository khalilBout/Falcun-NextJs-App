import mongoose from "mongoose";

const NewProfileSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
urlImage: {
     type: String,
      required: true ,
    },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", NewProfileSchema);

export default Profile;
