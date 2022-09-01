import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAlbum, GoogleMediaItem } from 'types/google';

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

export const fetchGoogleAlbumMediaItems = createAsyncThunk(
  'mediaItems/album/[albumId]',
  async (albumId: string) => {
    const response = await fetch(`/api/mediaItems/album/${albumId}`);
    const mediaItems: GoogleMediaItem[] = await response.json();

    return { albumId, mediaItems };
  }
);

export interface PhotoLibraryState {
  albums: GoogleAlbum[];
  albumPhotos: {
    [key: string]: GoogleMediaItem[];
  };
  mediaItems: GoogleMediaItem[];
  loading: boolean;
  filter: string;
  error: boolean;
}

const initialState: PhotoLibraryState = {
  albums: [],
  albumPhotos: {},
  mediaItems: [],
  loading: false,
  filter: '',
  error: false,
};

export const photoLibrarySlice = createSlice({
  name: 'photoLibrary',
  initialState,
  reducers: {
    setLoading: (state: PhotoLibraryState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAlbums: (
      state: PhotoLibraryState,
      action: PayloadAction<GoogleAlbum[]>
    ) => {
      state.albums = action.payload;
    },
    setMediaItems: (
      state: PhotoLibraryState,
      action: PayloadAction<GoogleMediaItem[]>
    ) => {
      state.mediaItems = action.payload;
    },
    setFilter: (state: PhotoLibraryState, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGoogleAlbums.pending, (state: PhotoLibraryState) => {
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
      .addCase(fetchAllGoogleAlbums.rejected, (state: PhotoLibraryState) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchGoogleMediaItems.pending, (state: PhotoLibraryState) => {
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
      .addCase(fetchGoogleMediaItems.rejected, (state: PhotoLibraryState) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(
        fetchGoogleAlbumMediaItems.pending,
        (state: PhotoLibraryState) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addCase(
        fetchGoogleAlbumMediaItems.fulfilled,
        (
          state: PhotoLibraryState,
          action: PayloadAction<{
            albumId: string;
            mediaItems: GoogleMediaItem[];
          }>
        ) => {
          state.albumPhotos[action.payload.albumId] = action.payload.mediaItems;
          state.loading = false;
        }
      )
      .addCase(
        fetchGoogleAlbumMediaItems.rejected,
        (state: PhotoLibraryState) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const { setLoading, setAlbums, setMediaItems, setFilter } =
  photoLibrarySlice.actions;

export default photoLibrarySlice.reducer;
