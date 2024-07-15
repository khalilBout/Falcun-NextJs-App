import mongoose from "mongoose";
import Book from "./book";

const OrderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [false],
  },
  email: {
    type: String,
    required: [false],
  },
  shippingAddress: {
    clientName: {
      type: String,
      required: [true],
    },
    address: {
      type: String,
      required: [true],
    },
    phone: {
      type: String,
      required: [true],
    },
  },
  orderItems: [
    {
      bookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
      titleBook: {
        type: String,
        required: [true],
      },
      bookCover: {
        type: String,
        required: [false],
      },
      season: {
        type: String,
        required: [false],
      },
      priceBook: {
        type: Number,
        required: [true],
      },
      Qt: {
        type: Number,
        required: [true],
      },
      level: {
        type: String,
        required: [false],
      },
    },
  ],
  totolPyment: {
    type: Number,
    required: true,
  },
  isProcess: {
    type: Boolean,
    required: true,
    default: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
