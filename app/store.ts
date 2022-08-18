import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../features/photoSlice';

export const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
