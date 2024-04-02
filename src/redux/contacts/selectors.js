import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterName.toLowerCase())
    )
);
