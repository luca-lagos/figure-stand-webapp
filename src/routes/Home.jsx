import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

export default function Home() {
  const store = useAppContext();
  return (
    <div>
      Home
      {store.items.map((item) => (
        <div>
          <Link to={"edit/" + item.id}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
