import React, { useEffect } from "react";
import ContactList from "../../Component/contactList/ContactList";
import Filter from "../../Component/filter/Filter";
import ContactForm from "../../Component/contactForm/ContactForm";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/Contacts/contactsOperation";

const AppHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default AppHook;
