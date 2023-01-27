import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";
import PictureInput from "../components/form/PictureInput";
import StateInput from "../components/form/StateInput";
import { useAppContext } from "../store/Store";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/register.module.css";

export default function Register() {
  const store = useAppContext();
  const navigate = useNavigate();
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      const { name, picture, state } = values;
      const newItem = {
        id: crypto.randomUUID(),
        name,
        picture,
        state,
      };
      console.log(newItem);
      store.addItem(newItem);
      navigate("/");
    },
    debugForm: false,
  });
  return (
    <div className={styles.formContainer}>
      <Form>
        <label htmlFor="">Fullname</label>
        <NameInput />
        <label htmlFor="">State</label>
        <StateInput />
        <label htmlFor="">Item picture</label>
        <PictureInput />
      </Form>
    </div>
  );
}
