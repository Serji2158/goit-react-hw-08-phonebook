import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/Contacts/contactsOperation";
import { ContactListContainer } from "../contactList/ContactListStyled";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContactItem = () => dispatch(deleteContact(contact.id));

  return (
    <ContactListContainer>
      <li className="data">
        <p>
          {contact.name} : {contact.number}
        </p>
        <button
          className="btn"
          type="button"
          id={contact.id}
          onClick={deleteContactItem}
        >
          Delete
        </button>
      </li>
    </ContactListContainer>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactListItem;
