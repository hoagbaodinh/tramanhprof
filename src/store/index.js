import { createSlice, configureStore } from '@reduxjs/toolkit';

// Slice dieu khien state category
const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    category: 'idea',
  },
  reducers: {
    changeCate(state, action) {
      state.category = action.payload;
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
  },
});

export default store;
export const productListActions = productListSlice.actions;
