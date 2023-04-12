import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state
interface CounterState {
  value: number;
  name: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  name: ''
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount, changeName } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
