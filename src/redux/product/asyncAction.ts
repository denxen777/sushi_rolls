import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TItemProduct } from './types';

export const fetchProducts = createAsyncThunk<TItemProduct[]>(
  'product/fetchProducts',
  async () => {
    const { data } = await axios.get<TItemProduct[]>(
      'http://localhost:4200/products'
    );
    return data;
  }
);
