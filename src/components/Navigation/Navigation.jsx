import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.list}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.item, isActive && css.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(css.item, isActive && css.active)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
