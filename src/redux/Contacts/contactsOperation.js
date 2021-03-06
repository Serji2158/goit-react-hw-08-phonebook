import axios from "axios";
import { BASE_URL } from "../../service/Api";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
} from "./contactsActions";

export const addContact = (contact) => (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(addContactRequest());

  axios
    .post(BASE_URL + `/${localId}/contacts.json?auth=${idToken}`, contact)
    .then(({ id }) => dispatch(addContactSuccess(contact)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (contactId) => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(deleteContactRequest());

  axios
    .delete(
      BASE_URL + `/${localId}/contacts/${contactId}.json?auth=${idToken}`,
      {
        headers: { Authorization: `Bearer ${idToken}` },
      }
    )
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const getContacts = () => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(getContactsRequest());

  axios
    .get(BASE_URL + `/${localId}/contacts.json?auth=${idToken}`, {
      headers: { Authorization: `Bearer ${idToken}` },
    })
    .then(({ data }) => {
      if (data) {
        return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
      } else {
        return [];
      }
    })
    .then((contacts) => dispatch(getContactsSuccess(contacts)))
    .catch((error) => dispatch(getContactsSuccess(error)));

  // try {
  //   const { data } = await axios.get(`BASE_URL + /contacts.json`);

  //   dispatch(getContactsSuccess(data));
  // } catch (error) {
  //   dispatch(getContactsError(error));
  // }
};
