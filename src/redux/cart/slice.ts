import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TItemCart, TStateCart } from './types';

const initialState: TStateCart = {
  items: [],
  totalPrice: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<TItemCart>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = getSum(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = getSum(state.items);
    },
    decrement(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.amount--;
      }
      state.totalPrice = getSum(state.items);
    },
    increment(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.amount++;
      }
      state.totalPrice = getSum(state.items);
    },
  },
});

const getSum = (items: TItemCart[]) => {
  return items.reduce((acc: number, item) => acc + item.price * item.amount, 0);
};

export const { addItemToCart, clearItems, removeItem, decrement, increment } =
  cart.actions;

export default cart.reducer;
