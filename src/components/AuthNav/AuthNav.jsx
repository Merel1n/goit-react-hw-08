import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div className={css.list}>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.item, isActive && css.active)}
      >
        Log In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.item, isActive && css.active)}
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
