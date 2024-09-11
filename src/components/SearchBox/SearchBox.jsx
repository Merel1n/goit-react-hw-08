import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilterValue } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(setFilterValue(evt.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        placeholder="Name/Phone"
      />
    </div>
  );
};
export default SearchBox;
