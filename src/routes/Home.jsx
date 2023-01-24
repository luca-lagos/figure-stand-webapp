import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import Figure from "../components/home/Figure";

export default function Home() {
  const store = useAppContext();
  return (
    <div>
      Home
      {store.items.map((item) => (
        <div>
          <Figure key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
}
