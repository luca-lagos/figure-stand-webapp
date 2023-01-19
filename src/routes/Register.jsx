import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";

export default function Register() {
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      await sendToFakeServer(values);
      console.log("Parado no bailao");
    },
    debugForm: true,
  });
  return (
    <div>
      <Form>
        <NameInput />
      </Form>
    </div>
  );
}



