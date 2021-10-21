import axios from "axios";
import { BASE_URL } from "../../service/Appi";
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

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  axios
    .post(BASE_URL + `/contacts.json`, contact)
    .then(({ id }) => dispatch(addContactSuccess(contact)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(BASE_URL + `/contacts/${contactId}.json`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());

  axios
    .get(BASE_URL + `/contacts.json`)
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
