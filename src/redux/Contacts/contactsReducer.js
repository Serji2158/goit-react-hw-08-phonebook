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
import { signOutSuccess } from "../Auth/auth-actions";

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [getContactsSuccess]: (_, action) => action.payload,
  [signOutSuccess]: () => [],
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
  [signOutSuccess]: () => "",
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
  [signOutSuccess]: () => false,
});

const errorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [signOutSuccess]: () => "",
});

export const contactsItemReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
