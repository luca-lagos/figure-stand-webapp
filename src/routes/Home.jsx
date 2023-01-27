import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import Figure from "../components/home/Figure";
import styles from "../assets/css/home.module.css";

export default function Home() {
  const store = useAppContext();
  return (
    <div>
      <div className={styles.container}>
        {store.items.map((item) => (
          <div>
            <Figure key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
