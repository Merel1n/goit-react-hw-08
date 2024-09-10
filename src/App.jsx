import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { apiRefreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  useEffect(() => {
    dispatch(apiRefreshUser);
  }, [dispatch]);
  if (isRefreshing) return <p>User is refreshing, please wait</p>;
  return (
    <>
      <header>
        <Layout />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
