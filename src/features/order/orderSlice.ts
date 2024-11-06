import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState,Order } from '@/types';

const initialState: OrderState = {
  orderDetails: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderDetails: (state, action: PayloadAction<Order>) => {
      state.orderDetails = action.payload;
    },
    clearOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
});

export const { setOrderDetails, clearOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
