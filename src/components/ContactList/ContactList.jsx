import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const dispatch = useDispatch();
  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const onDeleteContact = () => {
    dispatch(deleteContact(contactToDelete))
      .unwrap()
      .then(() => toast.success("Contact deleted successfully"))
      .catch((error) => toast.error(error.message));
    setIsModalOpen(false);
  };
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={handleDeleteClick}
          />
        </li>
      ))}
      {isModalOpen && (
        <div className={css.modal}>
          <p className={css.text}>
            Are you sure you want to delete this contact?
          </p>
          <div className={css.container}>
            <button
              type="button"
              className={css.button}
              onClick={onDeleteContact}
            >
              Yes
            </button>
            <button
              type="button"
              className={css.button}
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </ul>
  );
};
export default ContactList;
