import css from "./EditContactForm.module.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { selectCurrent } from "../../redux/contacts/selections";
import { setCurrent } from "../../redux/contacts/slice";
import { updateContact } from "../../redux/contacts/operations";

// const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
// const ContactValidationSchema = Yup.object().shape({
//   userName: Yup.string()
//     .required("Required")
//     .min(3, "Too short")
//     .max(50, "Too long"),
//   userNumber: Yup.string()
//     .matches(
//       phoneRegExp,
//       "The phone number must match the format 'xxx-xxx-xxxx'"
//     )
//     .required("Required"),
// });

const EditContactForm = () => {
  const current = useSelector(selectCurrent);
  const dispatch = useDispatch();
  console.log(current);
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputName = event.target.elements.userName.value.trim();
    const inputTel = event.target.elements.userNumber.value.trim();
    dispatch(
      updateContact({
        id: current.id,
        name: { inputName },
        number: { inputTel },
      })
    )
      .unwrap()
      .then(() => toast.success("Contact added successfully!"))
      .catch((error) => toast.error(error.message));
    event.target.reset();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={ContactValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              type="text"
              name="userName"
              className={css.input}
              placeholder="Name"
              defaultValue={current.name}
            />
            <ErrorMessage
              className={css.errorText}
              name="userName"
              component="span"
            />
          </label>
          <label className={css.label}>
            Number
            <Field
              type="tel"
              name="userNumber"
              className={css.input}
              placeholder="XXX-XXX-XXXX"
              defaultValue={current.number}
            />
            <ErrorMessage
              className={css.errorText}
              name="userNumber"
              component="span"
            />
          </label>
          <div className={css.container}>
            <button type="submit" className={css.button}>
              Save contact
            </button>
            <button
              type="button"
              className={css.button}
              onClick={() => {
                dispatch(setCurrent(null));
              }}
            >
              Close
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
export default EditContactForm;
