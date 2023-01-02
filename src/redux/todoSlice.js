import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getTodo = createAsyncThunk('todo/getTodo', async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },

  reducer: {},
  extraReducers: {
    [getTodo.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },

    [getTodo.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },

    [getTodo.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export default todoSlice.reducer;
