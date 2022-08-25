import { configureStore } from '@reduxjs/toolkit';
import photoLibraryReducer from './features/photoLibrarySlice';

export const store = configureStore({
  reducer: {
    photoLibrary: photoLibraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
