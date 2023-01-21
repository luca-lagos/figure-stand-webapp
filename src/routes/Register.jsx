import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";
import { useAppContext } from "../store/Store";

export default function Register() {
  const store = useAppContext();
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      const {name} = values;
      const newItem = {
        id: crypto.randomUUID(),
        name,
        picture: "",
        state: "purchased",
      };
      store.addItem(newItem);
    },
    debugForm: false,
  });
  return (
    <div>
      <Form>
        <NameInput />
      </Form>
    </div>
  );
}
