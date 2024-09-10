import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
  selectAuthUser,
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import { apiRefreshUser } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const user = useSelector(selectAuthUser);
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectAuthIsRefreshing);
  // useEffect(() => {
  //   dispatch(apiRefreshUser);
  // }, [dispatch]);
  // if (isRefreshing) return <p>User is refreshing, please wait</p>;
  return (
    <nav className={css.list}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.item, isActive && css.active)}
      >
        Home
      </NavLink>

      {!isLoggedIn ? (
        <>
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
            Registration
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) => clsx(css.item, isActive && css.active)}
          >
            Contacts
          </NavLink>
          <div>
            <h2>Hello, {user.name}!</h2>
          </div>

          <NavLink to="/" className={css.item}>
            LogOut
          </NavLink>
        </>
      )}
    </nav>
  );
};
export default AppBar;
