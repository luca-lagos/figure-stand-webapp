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
        <div className={styles.overlay}>{item.name}</div>
      </Link>
    </div>
  );
}
