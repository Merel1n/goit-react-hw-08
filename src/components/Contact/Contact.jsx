import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { setCurrent } from "../../redux/contacts/slice";
import { useDispatch } from "react-redux";
const Contact = ({ id, name, number, onDeleteContact }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.text}>
        <p>
          <FaUser />
          <span> {name}</span>
        </p>
        <p>
          <BsFillTelephoneFill />
          <span> {number}</span>
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(setCurrent({ id, name, number }));
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
