import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "../contactListItem/ContactListItem";
import { contactsFilteredContacts } from "../../redux/Contacts/contactsSelectors";
import { ContactListContainer } from "./ContactListStyled";

const ContactList = () => {
  const contacts = useSelector(contactsFilteredContacts);

  return (
    <>
      <ContactListContainer>
        <ol className="list">
          {contacts &&
            contacts.map((contact) => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
        </ol>
      </ContactListContainer>
    </>
  );
};

export default ContactList;
