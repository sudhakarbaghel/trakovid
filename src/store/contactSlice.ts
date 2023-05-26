import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, status } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact.id === id
      );
      if (existingContact) {
        existingContact.firstName = firstName;
        existingContact.lastName = lastName;
        existingContact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
