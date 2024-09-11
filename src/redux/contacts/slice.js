import { createSlice } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { apiLogout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  current: null,
};
const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.current = null;
      })
      .addCase(updateContact.rejected, handleRejected)
      .addCase(apiLogout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { setCurrent } = contactsSlice.actions;
