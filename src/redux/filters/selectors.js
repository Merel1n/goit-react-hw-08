import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selections";

export const selectNameFilter = (state) => state.filter.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, query) => {
    return contacts.filter((contact) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        contact.name.toLowerCase().includes(lowerCaseQuery) ||
        contact.number.includes(query)
      );
    });
  }
);
