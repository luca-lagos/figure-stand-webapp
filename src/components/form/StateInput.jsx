import { useForm, useField, splitFormProps } from "react-form";

const options = [
  {
    id: "none",
    title: "Seleccionar un estado...",
  },
  {
    id: "purchased",
    title: "Comprado",
  },
  {
    id: "whishlist",
    title: "Lista de deseos",
  },
];

async function validateState(state, instance) {
  if (!state) {
    return "A state is required";
  }
  return instance.debounce(async () => {
    console.log("checking state");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return false;
  }, 500);
}

export default function StateInput(props) {
  const [field, fieldOptions, { ...rest }] = splitFormProps(props);
  const {
    value = "",
    setValue,
    meta: { error, isTouched },
  } = useField("state", { validate: validateState });

  const HandleSelectChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <label>Estado del item</label>
      <select
        name="state"
        {...rest}
        value={value}
        onChange={HandleSelectChange}
      >
        {options.map((option) => {
          <option key={option.id} value={option.id}>
            {option.title}
          </option>;
        })}
      </select>
    </div>
  );
}

//1:17hs para seguir
