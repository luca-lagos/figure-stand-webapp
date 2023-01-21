import { Route, Routes, useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import { useForm, useField, splitFormProps } from "react-form";
import NameInput from "../components/form/NameInput";

export default function Edit() {
  const params = useParams();
  const store = useAppContext();
  const item = store.getItem(params.id);
  return (
    <div>
      <Form>
        <NameInput />
      </Form>
      {item.name}
    </div>
  );
}
