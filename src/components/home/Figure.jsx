import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";

export default function Figure({ item }) {
  return (
    <div className={styles.figure}>
      <img
        src={item.picture}
        alt=""
        width={250}
        height={250}
        style={{ objectFit: "cover" }}
      />
      <Link to={"edit/" + item.id}>
        <div
          className={
            item.state == "purchased" ? styles.overlayp : styles.overlayw
          }
        ><p>{item.name}</p></div>
      </Link>
    </div>
  );
}
