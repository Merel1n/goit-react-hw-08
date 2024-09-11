import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { selectAuthIsOpenModal } from "../../redux/auth/selectors";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectAuthIsOpenModal);
  const handleLogout = () => {
    dispatch(apiLogout());
  };
  const closeModal = () => {
    dispatch(isOpenModal(false));
  };
  return (
    <div>
      <div>
        <h3>Do you really want to log out?</h3>
        <button type="button" onClick={handleLogout}>
          Yes
        </button>
        <button type="button" onClick={closeModal}>
          Not
        </button>
      </div>
    </div>
  );
};
export default Modal;
