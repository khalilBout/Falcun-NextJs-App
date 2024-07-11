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
  },
});
// Action creators are generated for each case reducer function
export const { addToBasket, removeItem, resetBasket, setOpenCart } =
  CartSlice.actions;

export default CartSlice.reducer;
