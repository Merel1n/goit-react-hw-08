import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={css.list}>
      <span className={css.text}>{user.name}</span>
      <button onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
