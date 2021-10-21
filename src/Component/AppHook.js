import React, { useEffect } from "react";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import { useDispatch } from "react-redux";
import { getContacts } from "../redux/Contacts/contactsOperation";

const AppHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default AppHook;
