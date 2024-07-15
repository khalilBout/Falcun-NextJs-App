import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartBooks: [],
  openCart: false,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // open or close basket menu
    setOpenCart: (state) => {
      state.openCart = !state.openCart;
    },

    // this is despatch to add product to besket
    addToBasket: (state, action) => {
      state.cartBooks.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartBooks = state.cartBooks.filter(
        (elm) =>
          elm !==
          state.cartBooks.find((item) => item.idBook === action.payload.idBook)
      );
      toast.success(" تم مسح المذكرة ");
    },

    resetBasket: (state) => {
      state.cartBooks = [];
    },
    increaseCount: (state, action) => {
      state.cartBooks = state.cartBooks.map((item) => {
        if (item.idBook === action.payload.idBook) {
          item.Qt++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cartBooks = state.cartBooks.map((item) => {
        if (item.idBook === action.payload.idBook) {
          if (item.Qt > 1) {
            item.Qt--;
          }
        }
        return item;
      });
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addToBasket,
  removeItem,
  resetBasket,
  setOpenCart,
  decreaseCount,
  increaseCount,
} = CartSlice.actions;

export default CartSlice.reducer;
