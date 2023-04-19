import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      if(state.value < 10){
      state.value += 1};
    },
    decrement: (state) => {
        if(state.value > 0){
      state.value -= 1;}
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
