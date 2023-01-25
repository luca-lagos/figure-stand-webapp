import { useForm, useField, splitFormProps } from "react-form";

const options = [
  {
    id: "purchased",
    title: "Comprado",
  },
  {
    id: "whishlist",
    title: "Lista de deseos",
  },
];

export default function StateInput() {
  const {
    value,
    setValue,
    meta: { error, isTouched },
  } = useField("state", fieldOptions);

  const HandleSelectChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <select
      name="state"
      {...rest}
      value={value}
      onChange={HandleSelectChange}
      id=""
    >
      {options.map((option) => {
        <option key={value.id} value={option.id}>
          {option.title}
        </option>;
      })}
    </select>
  );
}

//1:17hs para seguir
