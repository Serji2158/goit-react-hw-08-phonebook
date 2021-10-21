import React from "react";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import ContactListItem from "../contactListItem/ContactListItem";
import { contactsFilteredContacts } from "../../redux/Contacts/contactsSelectors";

const ContactList = () => {
  const contacts = useSelector(contactsFilteredContacts);

  return (
    <>
      <div>
        <ol className={s.list}>
          {contacts &&
            contacts.map((contact) => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
        </ol>
      </div>
    </>
  );
};

export default ContactList;
