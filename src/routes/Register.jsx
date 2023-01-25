import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";
import PictureInput from "../components/form/PictureInput";
import { useAppContext } from "../store/Store";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const store = useAppContext();
  const navigate = useNavigate();
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      const { name, picture } = values;
      const newItem = {
        id: crypto.randomUUID(),
        name,
        picture,
        state: "purchased",
      };
      console.log(newItem);
      store.addItem(newItem);
      navigate("/");
    },
    debugForm: false,
  });
  return (
    <div>
      <Form>
        <NameInput />
        <StateInput />
        <PictureInput />
      </Form>
    </div>
  );
}
