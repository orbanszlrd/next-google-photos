import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAlbum, GoogleMediaItem } from '../../types/google';

export const fetchAllGoogleAlbums = createAsyncThunk(
  'albums/fetchAll',
  async () => {
    const response = await fetch('/api/albums');
    return response.json();
  }
);

export interface PhotoLibraryState {
  albums: GoogleAlbum[];
  mediaItems: GoogleMediaItem[];
  loading: boolean;
  filter: string;
  error: boolean;
}

const initialState: PhotoLibraryState = {
  albums: [],
  mediaItems: [],
  loading: false,
  filter: '',
  error: false,
};

export const photoLibrarySlice = createSlice({
  name: 'photoLibrary',
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
      .addCase(
        fetchAllGoogleAlbums.fulfilled,
        (state: PhotoLibraryState, action) => {
          state.albums = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAllGoogleAlbums.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLoading, setAlbums, setFilter } = photoLibrarySlice.actions;

export default photoLibrarySlice.reducer;
