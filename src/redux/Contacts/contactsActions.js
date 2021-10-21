import { createAction } from "@reduxjs/toolkit";
import { SETERROR } from "./contactTypes";

export const addNewContact = createAction(
  "contactsActions/addContact",
  (contact) => ({
    payload: {
      ...contact,
    },
  })
);

export const deleteContact = createAction("contactActions/deleteContact");
export const getContacts = createAction("contactsActions/getContacts");
export const setFilter = createAction("contactsActions/setFilter");

export const getContactsRequest = createAction("Contacts/getContactsRequest");
export const getContactsSuccess = createAction("Contacts/getContactsSuccess");
export const getContactsError = createAction("Contacts/getContactsError");

export const addContactRequest = createAction("Contacts/addContactRequest");
export const addContactSuccess = createAction("Contacts/addContactSuccess");
export const addContactError = createAction("Contacts/addContactError");

export const deleteContactRequest = createAction(
  "Contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "Contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("Contacts/deleteContactError");

export const toggleCompletedError = createAction(
  "Contacts/toggleCompletedError"
);

export const changeFilter = createAction("Contacts/changeFilter");

export const setError = createAction(SETERROR);
