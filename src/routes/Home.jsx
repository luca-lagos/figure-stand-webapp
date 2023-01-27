import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import Figure from "../components/home/Figure";
import styles from "../assets/css/home.module.css";

export default function Home() {
  const store = useAppContext();
  return (
    <div className={styles.container}>
      <h1>My figures gallery</h1>
      <div className={styles.info}>
        <div>
          <label style={{ backgroundColor: "rgba(14, 88, 158, 0.7)" }}></label>{" "}
          Purchased
        </div>
        <div>
          <label style={{ backgroundColor: "rgba(8, 112, 81, 0.7)" }}></label>{" "}
          Wishlist
        </div>
      </div>
      <div className={styles.gallery}>
        {store.items.map((item) => (
          <div>
            <Figure key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
