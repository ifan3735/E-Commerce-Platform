import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductState {
  products: any[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

export const fetchProducts: any = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
