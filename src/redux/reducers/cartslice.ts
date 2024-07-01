import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  cartVisibleState: boolean;
};

const initialState: CartState = {
  cartVisibleState: false,
};

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action) => {
      //   state.list.push(action.payload);
    },
  },
});

export const { showCart } = cartslice.actions;
export default cartslice.reducer;
