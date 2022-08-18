import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAlbum } from '../types/google';

export const fetchAllGoogleAlbums = createAsyncThunk(
  'albums/fetchAll',
  async () => {
    const response = await fetch('/api/albums');
    return response.json();
  }
);

export interface AlbumState {
  albums: GoogleAlbum[];
  loading: boolean;
  filter: string;
  error: boolean;
}

const initialState: AlbumState = {
  albums: [],
  loading: false,
  filter: '',
  error: false,
};

export const albumSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAlbums: (state, action: PayloadAction<GoogleAlbum[]>) => {
      state.albums = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGoogleAlbums.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllGoogleAlbums.fulfilled, (state: AlbumState, action) => {
        state.albums = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllGoogleAlbums.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLoading, setAlbums, setFilter } = albumSlice.actions;

export default albumSlice.reducer;
