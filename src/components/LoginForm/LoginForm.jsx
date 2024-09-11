import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiLogin } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters"),

  email: Yup.string()
    .email("Invalid e-mail address")
    .required("Email address is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(apiLogin(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>User email:</span>
            <Field
              type="text"
              name="email"
              placeholder="adam.example@gmail.com"
              className={css.input}
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.button}
            type="submit"
          >
            Login
          </button>
          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
