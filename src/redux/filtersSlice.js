import { createSlice } from "@reduxjs/toolkit";

const initialFilter = { name: "" };

const filtersSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    setFilterValue: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filter.name;
