import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
// import { useMemo } from "react";
// import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filterValue = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const onDeleteContact = (profileId) => {
    dispatch(deleteContact(profileId));
  };
  const filteredContacts = useSelector(selectFilteredContacts);

  // const filteredContacts = useMemo(
  //   () =>
  //     contacts.filter((contact) => {
  //       return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  //     }),
  //   [contacts, filterValue]
  // );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
