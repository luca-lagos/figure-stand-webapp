import { useForm, useField, splitFormProps } from "react-form";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "../../assets/css/register.module.css";

async function validatePicture(picture, instance) {
  if (!picture) {
    return "A picture is required";
  }
  return instance.debounce(async () => {
    console.log("checking picture");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return false;
  }, 500);
}

export default function PictureInput() {
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  useEffect(() => {}, []);
  const {
    setValue,
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("picture", {
    validate: validatePicture,
  });
  const HandleChange = (e) => {
    if (e.target.files.length === 1) {
      const fileReader = new FileReader();
      fileReader.onload = (res) => {
        console.log(res.target.result);
        imageRef.current.src = res.target.result;
        setValue(res.target.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const HandleClick = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <input
        ref={fileInputRef}
        name="picture"
        type={"file"}
        onChange={HandleChange}
        style={{ display: "none" }}
      />
      <input
        type={"text"}
        name="picture"
        id=""
        {...getInputProps()}
        style={{ display: "none" }}
      />
      <button className={styles.btnPicture} onClick={HandleClick}>Select image</button>{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error || ""}</em>
      ) : null}
      <div className={styles.preview}>
        <img ref={imageRef} src="" alt="" width={250}/>
      </div>
      <input className={styles.btnSubmit} type="submit" value="create" />
    </>
  );
}
