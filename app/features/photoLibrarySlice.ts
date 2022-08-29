import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAlbum, GoogleMediaItem } from '../../types/google';
import { Theme } from '../../types/theme';

export const fetchAllGoogleAlbums = createAsyncThunk(
  'albums/fetchAll',
  async () => {
    const response = await fetch('/api/albums');
    return response.json();
  }
);

export const fetchGoogleMediaItems = createAsyncThunk(
  'mediaItems/fetch',
  async () => {
    const response = await fetch('/api/mediaItems');
    return response.json();
  }
);

export interface PhotoLibraryState {
  albums: GoogleAlbum[];
  mediaItems: GoogleMediaItem[];
  loading: boolean;
  filter: string;
  error: boolean;
  theme: Theme;
}

const initialState: PhotoLibraryState = {
  albums: [],
  mediaItems: [],
  loading: false,
  filter: '',
  error: false,
  theme: Theme.Dark,
};

export const photoLibrarySlice = createSlice({
  name: 'photoLibrary',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setAlbums: (state, action: PayloadAction<GoogleAlbum[]>) => {
      state.albums = action.payload;
    },
    setMediaItems: (state, action: PayloadAction<GoogleMediaItem[]>) => {
      state.mediaItems = action.payload;
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
      })
      .addCase(fetchGoogleMediaItems.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchGoogleMediaItems.fulfilled,
        (state: PhotoLibraryState, action) => {
          state.mediaItems = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchGoogleMediaItems.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLoading, setTheme, setAlbums, setMediaItems, setFilter } =
  photoLibrarySlice.actions;

export default photoLibrarySlice.reducer;
