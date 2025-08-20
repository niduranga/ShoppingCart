import { createSlice } from '@reduxjs/toolkit'
import type { ICartSlice } from "../utilities/type/cartProducts";

const initialState: ICartSlice = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload)
      console.log(action.payload);
    }
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer