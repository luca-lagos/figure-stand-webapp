import { useForm, useField, splitFormProps } from "react-form";

async function validateName(name, instance) {
  if (!name) {
    return "A name is required";
  }
  return instance.debounce(async () => {
    console.log("checking name");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return false;
  }, 500);
}

export default function NameInput({inputValue}) {
  const {
    value = inputValue,
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("name", {
    validate: validateName,
  });

  return (
    <>
      <input type={"text"} {...getInputProps({value})} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error || ""}</em>
      ) : null}
    </>
  );
}
