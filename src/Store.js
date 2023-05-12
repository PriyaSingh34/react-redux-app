import { createSlice, configureStore } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: '',
  reducers: {
    setInputValue: (state, action) => action.payload
  }
});

const store = configureStore({
  reducer: {
    input: inputSlice.reducer
  }
});

export const { setInputValue } = inputSlice.actions;
export default store;