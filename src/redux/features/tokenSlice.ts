import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');

const tokenSlice = createSlice({
  name: 'token',
  initialState: storedToken || null,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", action.payload)
      return action.payload;
    },
    clearToken: () => {
      localStorage.removeItem("token");
      return null;
    },
    initializeToken: () => storedToken || null,
  },
});

export const { setToken, clearToken, initializeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
