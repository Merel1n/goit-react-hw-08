import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

import { selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
