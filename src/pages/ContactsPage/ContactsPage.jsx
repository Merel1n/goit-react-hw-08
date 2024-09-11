import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
// import { selectLoading } from "../../redux/contactsSlice";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectCurrent, selectLoading } from "../../redux/contacts/selections";
import EditContactForm from "../../components/EditContactForm/EditContactForm";

const ContactsPage = () => {
  const current = useSelector(selectCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>

        {current ? <EditContactForm /> : <ContactForm />}
        <SearchBox />
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </>
  );
};
export default ContactsPage;
