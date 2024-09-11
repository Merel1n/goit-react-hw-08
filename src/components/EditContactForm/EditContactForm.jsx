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
  const initialValues = {
    name: current.name,
    number: current.number,
  };
  const handleSubmit = (values) => {
    dispatch(
      updateContact({
        id: current.id,
        ...values,
      })
    )
      .unwrap()
      .then(() => toast.success("Contact added successfully!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={ContactValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Name"
            />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            Number
            <Field
              type="tel"
              name="number"
              className={css.input}
              placeholder="XXX-XXX-XXXX"
            />
            <ErrorMessage
              className={css.errorText}
              name="number"
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
