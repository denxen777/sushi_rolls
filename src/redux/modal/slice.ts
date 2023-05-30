import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TStateModal } from './types';
import { TItemProduct } from '../product/types';

const initialState: TStateModal = {
  item: {
    id: 0,
    imgURL: '',
    name: '',
    weight: 0,
    description: '',
    price: 0,
    categoryId: 0,
    amount: 0,
  },
  activeModal: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addItemToModal(state, action: PayloadAction<TItemProduct>) {
      state.item = action.payload;
    },
    increment(state) {
      state.item.amount++;
    },
    decrement(state) {
      state.item.amount--;
    },
    clearItemAmount(state, action: PayloadAction<number>) {
      state.item.amount = action.payload;
    },
    setActiveModal(state, action: PayloadAction<boolean>) {
      state.activeModal = action.payload;
    },
  },
});

export const {
  addItemToModal,
  setActiveModal,
  clearItemAmount,
  increment,
  decrement,
} = modal.actions;

export default modal.reducer;
