import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/mover/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
