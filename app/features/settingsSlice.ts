import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from 'types/theme';

export interface SettingsState {
  theme: Theme;
}

const initialState: SettingsState = {
  theme: Theme.Dark,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state: SettingsState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
