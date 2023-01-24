import { Route, Routes, useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";
import PictureInput from "../components/form/PictureInput";

export default function Edit() {
  const params = useParams();
  const store = useAppContext();
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      const { name } = values;
      const item = store.getItem(params.id);
      item.name = name;
      store.updateItem(item);
    },
    debugForm: false,
  });
  const item = store.getItem(params.id);
  return (
    <div>
      <Form>
        <NameInput inputValue={item.name} />
        <PictureInput />
      </Form>
      {item.name}
      {item.picture && <img src={item.picture} alt="" width={250} />}
    </div>
  );
}
