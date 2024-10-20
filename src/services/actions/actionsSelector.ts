import {RootState} from "../store";

export const productsArray = (store: RootState) => store.products.products;
export const cartCostSelector = (store: RootState) => store.cart.cost;
export const cartCounterSelector = (store: RootState) => store.cart.counter;