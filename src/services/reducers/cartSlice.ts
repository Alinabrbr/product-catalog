import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TProduct} from "../../utils/types/types";


type TInitialState = {
  shoppingCart: string[],
  counter: number,
  cost: number,
}

export const initialState: TInitialState = JSON.parse(localStorage.getItem("cart") ?? '{"shoppingCart":[],"counter":0,"cost":0}');

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: {
      reducer: (state: TInitialState, action: PayloadAction<TProduct>) => {
        state.shoppingCart.push(action.payload.id)
        state.counter = state.shoppingCart.length

        state.cost += action.payload.cost

        localStorage.setItem("cart", JSON.stringify(state));
      },
      prepare: (payload) => {
        return {
          payload: payload,
        };
      },
    },
    clearStore: (state) => {
      state.shoppingCart = [];
      state.counter = 0;
      state.cost = 0;
      localStorage.removeItem("cart");
    }
  }
})

export default cartSlice.reducer;
export const {addProduct, clearStore} = cartSlice.actions;