import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading } from "../../redux/contactsSlice";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </>
  );
};
export default ContactsPage;
