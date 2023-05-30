import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TItemProduct, TStateProduct } from './types';
import { fetchProducts } from './asyncAction';

const initialState: TStateProduct = {
  items: [],
  status: 'loading',
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<TItemProduct[]>) => {
        state.items = action.payload;
        state.status = 'success';
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export default product.reducer;
