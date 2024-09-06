import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const axios = {
//   baseUrl: "https://66d63aa9f5859a704268b478.mockapi.io/phonebook/contacts",
// };
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://66d63aa9f5859a704268b478.mockapi.io/phonebook/contacts"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `https://66d63aa9f5859a704268b478.mockapi.io/phonebook/contacts`,
        contact
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://66d63aa9f5859a704268b478.mockapi.io/phonebook/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
