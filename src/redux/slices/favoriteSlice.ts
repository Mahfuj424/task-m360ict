import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: number[];
}

const initialState: FavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.ids.includes(action.payload)) {
        state.ids = state.ids.filter((id) => id !== action.payload);
      } else {
        state.ids.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
