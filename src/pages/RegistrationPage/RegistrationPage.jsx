import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};
export default RegisterPage;
