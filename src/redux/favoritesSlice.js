import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(localStorage.getItem("favorites")) || [],
  reducers: {
    addFavorite: (state, action) => {
      if (!state.find((city) => city.city === action.payload.city)) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.filter(
        (city) => city.city !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      toast.success("Remove favorites city");
      return updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
