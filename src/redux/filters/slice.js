import { createSlice } from "@reduxjs/toolkit";

const initialFilter = {
  name: "",
  tel: "",
};

const filtersSlice = createSlice({
  name: "filter",
  tel: "filter",
  initialState: initialFilter,
  reducers: {
    setFilterValue: (state, action) => {
      state.name = action.payload;
    },
    setFilterTel: (state, action) => {
      state.tel = action.payload;
    },
  },
});
export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
export const { setFilterTel } = filtersSlice.actions;
