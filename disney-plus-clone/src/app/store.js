import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/mover/movieSlice';
import userReducer from "../features/user/userSlice.js";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  }
});
