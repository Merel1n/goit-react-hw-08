import css from "./HomePage.module.css";
import { GrStatusGood } from "react-icons/gr";

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to my first app!</h1>
      <p className={css.label}>
        The Phonebook application offers several key advantages:
      </p>
      <ul className={css.list}>
        <li>
          <p className={css.text}>
            <GrStatusGood />
            <b className={css.span}> Easy Contact Management:</b>
            Simplifies storing, editing, and deleting contacts in one place.
          </p>
        </li>
        <li>
          <p className={css.text}>
            <GrStatusGood />
            <b className={css.span}> Search Functionality:</b> Allows quick
            filtering of contacts by name, making it easier to find the person
            you need.
          </p>
        </li>
        <li>
          <p className={css.text}>
            <GrStatusGood />
            <b className={css.span}> User-Friendly Interface:</b> Simple and
            intuitive design for seamless navigation and usage.
          </p>
        </li>
        <li>
          <p className={css.text}>
            <GrStatusGood />
            <b className={css.span}> Scalable for Large Contact Lists:</b>
            Supports large numbers of contacts without performance issues.
          </p>
        </li>
        <li>
          <p className={css.text}>
            <GrStatusGood />
            <b className={css.span}> Form Validation:</b> Ensures accurate and
            complete data entry for every contact.
          </p>
        </li>
      </ul>
    </>
  );
};
export default HomePage;
