import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { setError } from "./contactsActions";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  changeFilter,
} from "./contactsActions";

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [getContactsSuccess]: (_, action) => action.payload,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
});

export const contactsItemReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
